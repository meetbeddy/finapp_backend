const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../services/mailgun").memberConfirmation;
const sendInvite = require("../services/mailgun").adminInvite;

/*@route POST 
 @desc confirm user
 @access private*/

exports.confirmUser = async (req, res) => {
  const id = req.params.id;

  try {
    if (!req.user.accessLevel)
      return res.status(401).json({
        message: "you dont have the permission to carry out this action",
      });

    let user = await User.findOne({
      _id: id,
    });

    //find last confirmed user
    const lastUser = await User.find({ confirmed: true })
      .sort({ _id: -1 })
      .limit(1)
      .then((person) => {
        return person[0];
      });

    const lastUserMemberId =
      lastUser != undefined ? lastUser.memberId.slice(-6) : "0";

    const memberId = generateMemberId(lastUserMemberId);

    user.confirmed = true;
    user.memberId = memberId;
    user.save();
    sendEmail(user.email, user.name, memberId);
    res.status(200).json({ message: "user confirmed successfully" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", error: err.msg });
  }
};

/*@route GET 
 @desc get confirmed user
 @access public*/

exports.FetchMembers = async (req, res) => {
  try {
    const users = await User.find(
      {
        confirmed: true,
      },
      { _id: 0, name: 1, memberId: 1, email: 1, phone: 1, birthDate: 1 }
    );

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

/*@route GET 
 @desc get admin
 @access private*/

exports.getAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Admin.findOne({ _id: id });
    res.json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

/*@route GET 
 @desc get all users
 @access private*/

exports.FetchAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate({
        path: "paymentDetails",
        model: "PaymentDetail",
      })
      .populate({
        path: "employmentDetails",
        model: "EmploymentDetail",
      });

    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

/*@route POST 
 @desc Admin Creation
 @access private*/
exports.CreateModerator = async (req, res) => {
  const { email, phone, password, fullname } = req.body;

  try {
    if (req.user.accessLevel < 3)
      return res.status(401).json({
        message: "you dont have the permission to carry out this action",
      });
    const existingUser = await Admin.findOne({ email: email });

    if (existingUser) {
      return res.json({ message: "user already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await Admin.create({
      email,
      phone,
      password: hashedpassword,
      name: fullname,
    });
    adminInvite(email, fullname, password);
    res.status(200).json({ message: "successfully created admin", user });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

/*@route POST 
 @desc login for admins
 @access public*/
exports.AdminLogin = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await Admin.findOne({ email: email });
  try {
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
        accessLevel: existingUser.accessLevel,
      },
      process.env.TOKEN_SECRET
    );
    res.status(200).json({ user: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

//LMCS/month/year/sixdigitsequence
generateMemberId = (lastid) => {
  let todayDate = new Date();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();
  let num = parseInt(lastid) + 1;

  let sequence = num + "";
  while (sequence.length < 6) sequence = "0" + sequence;

  let id = `LMCS/${month}/${year}/${sequence}`;

  return id;
};
