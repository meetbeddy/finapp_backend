const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const EmploymentDetail = require("../models/EmploymentDetail");
const PaymentDetail = require("../models/PaymentDetail");
const multer = require("../middleware/multer");
const cloudinary = require("cloudinary");
const sendEmail = require("../services/mailgun").emailConfirmation;
const path = require("path");

/*@route POST 
 @desc sign in for user
 @access public*/

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser)
      return res.status(404).json({ message: "user does not exist" });
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(400).json({ message: "incorrect password" });
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.TOKEN_SECRET
    );
    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

/*@route POST 
 @desc sign up for user
 @access public*/

exports.signUp = async (req, res) => {
  const {
    fullname,
    email,
    password,
    confirmpassword,
    homeAddress,
    phone,
    birthDate,
    category,
    title,
    gender,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    let images = await handleUploads(req);

    if (existingUser) {
      return res.status(404).json({ message: "user already exist" });
    }
    if (password !== confirmpassword) {
      return res.status(404).json({ message: "password doesn't match" });
    }
    const hashedpassword = await bcrypt.hash(password, 12);

    const token = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
      expiresIn: "2h",
    });
    const user = await User.create({
      name: fullname,
      email,
      homeAddress,
      phone,
      password: hashedpassword,
      signature: images.signature.url,
      passport: images.passport.url,
      birthDate,
      category,
      title,
      gender,
      confirmationCode: token,
    });

    saveEmploymentDetails(user, req);
    savePaymentDetails(user, req);
    sendEmail(email, fullname, token);
    res.status(200).json({ user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};
handleUploads = async (req) => {
  let passport;
  let signature;

  let file1 = req.files.passport[0];
  let file2 = req.files.signature[0];
  if (req.files) {
    const pass = multer.dataUri(file1).content;
    const sign = multer.dataUri(file2).content;
    passport = await cloudinary.uploader.upload(pass);
    signature = await cloudinary.uploader.upload(sign);
  }
  return {
    passport,
    signature,
  };
};
saveEmploymentDetails = async (user, req) => {
  const {
    organisationName,
    rank,
    gradeLevel,
    step,
    retirementDate,
    ippisNum,
    campusName,
    salaryStructure,
    faculty,
    department,
    assumptionOfdutyDate,
    staffNum,
  } = req.body;
  let person = await User.findOne({ _id: user._id }).select("-password");

  try {
    details = await new EmploymentDetail({
      organisationName,
      rank,
      gradeLevel,
      step,
      retirementDate,
      ippisNum,
      campusName,
      salaryStructure,
      faculty,
      department,
      assumptionOfdutyDate,
      staffNum,
    }).save();

    person.employmentDetails = details?._id;
    person.save();
  } catch (err) {
    console.log(err);
  }
};

savePaymentDetails = async (user, req) => {
  const { tellername, tellerRefNum, paymentDate, amount, bankname } = req.body;
  let person = await User.findOne({ _id: user._id }).select("-password");

  try {
    paymentDetail = await new PaymentDetail({
      tellerName: tellername,
      tellerRefNum,
      paymentDate,
      amount,
      bankName: bankname,
    }).save();

    person.paymentDetails = paymentDetail?._id;
    person.save();
  } catch (err) {
    console.log(err);
  }
};

/*@route GET 
 @desc get user profile
 @access private*/

exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await User.findOne({
      _id: id,
    })
      .populate({
        path: "paymentDetails",
        model: "PaymentDetail",
      })
      .populate({
        path: "employmentDetails",
        model: "EmploymentDetail",
      });
    if (!user) return res.status(404).json({ message: "user does not exist" });
    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

/*@route GET 
 @desc email verification
 @access public*/

exports.verifyEmail = async (req, res) => {
  const confirmationCode = req.params.confirmationcode;

  try {
    const user = await User.findOne({
      confirmationCode: confirmationCode,
    });

    if (!user)
      return res
        .status(404)
        .send({ message: "user not found or you are already confirmed" });
    user.emailStatus = "active";
    user.confirmationCode = undefined;
    user.save();
    res.sendFile(
      "emailconfirm.html",
      { root: path.join(__dirname, "../public") },
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.sendEmailConfirmation = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user.emailStatus === "active")
      return res.status(400).send("user email is already is already confirmed");
    sendEmail(user.email, user.name, user.confirmationCode);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
