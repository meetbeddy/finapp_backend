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

//signup
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
  } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    let image = await handleUploads(req);

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
      email,
      homeAddress,
      phone,
      password: hashedpassword,
      name: fullname,
      signature: image.url,
      birthDate,
      category,
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
  let image;
  if (req.file) {
    const file = multer.dataUri(req).content;
    image = await cloudinary.uploader.upload(file);
  }
  return image;
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
exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await User.findOne({
      _id: id,
    });
    if (!user) return res.status(404).json({ message: "user does not exist" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

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
    res.status(500).json(err);
  }
};
