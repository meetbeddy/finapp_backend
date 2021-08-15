const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const EmploymentDetail = require("../models/EmploymentDetail");
const PaymentDetail = require("../models/PaymentDetail");

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
exports.signUp = async (req, res) => {
  const {
    fullname,
    email,
    password,
    homeAddress,
    phone,
    confirmpassword,
    tellername,
    tellerRefNum,
    paymentDate,
    amount,
    bankname,
    organisationName,
    rank,
    gradeLevel,
    step,
    signature,
    retirementDate,
  } = req.body;

  let paymentDetails = {
    tellername,
    tellerRefNum,
    paymentDate,
    amount,
    bankname,
  };

  let employmentDetails = {
    organisationName,
    rank,
    gradeLevel,
    step,
    retirementDate,
  };

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(404).json({ message: "user already exist" });
    }
    if (password !== confirmpassword) {
      return res.status(404).json({ message: "password doesn't match" });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      homeAddress,
      phone,
      password: hashedpassword,
      name: fullname,
      signature,
    });

    saveEmploymentDetails(user, employmentDetails);
    savePaymentDetails(user, paymentDetails);

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

saveEmploymentDetails = async (user, employmentDetails) => {
  let person = await User.findOne({ _id: user._id }).select("-password");

  try {
    details = await new EmploymentDetail({
      organisationName: employmentDetails.organisationName,
      rank: employmentDetails.rank,
      gradeLevel: employmentDetails.gradeLevel,
      step: employmentDetails.step,
      retirementDate: employmentDetails.retirementDate,
    }).save();

    person.employmentDetails = details?._id;
    person.save();
  } catch (err) {
    console.log(err);
  }
};

savePaymentDetails = async (user, paymentDetails) => {
  const { tellername, tellerRefNum, paymentDate, amount, bankname } =
    paymentDetails;
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
  const { id } = req.params;
  try {
    let user = await User.findOne({
      _id: id,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};
