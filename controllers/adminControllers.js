const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//confirm user

exports.confirmUser = async (req, res) => {
  const id = req.params.id;
  let user = await User.findOne({
    _id: id,
  });

  const lastUser = await User.find({ confirmed: true })
    .sort({ _id: -1 })
    .limit(1)
    .then((products) => {
      return products[0];
    });

  const lastUserMemberId =
    lastUser != undefined ? lastUser.memberId.slice(-6) : "0";

  const memberId = generateMemberId(lastUserMemberId);

  user.confirmed = true;
  user.memberId = memberId;
  user.save();
  res.status(200).json({ message: "user confirmed successfully" });
};

//fetch confirmed members

exports.FetchMembers = async (req, res) => {
  try {
    const users = await User.find(
      {
        confirmed: true,
      },
      { _id: 0, name: 1, memberId: 1 }
    );

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

//create moderators
exports.CreateModerator = async (req, res) => {
  const { email, phone, password, fullname } = req.body;
  const existingUser = await Admin.findOne({ email: email });
  console.log(req.body);
  try {
    if (existingUser) {
      return res.status(404).json({ message: "user already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await Admin.create({
      email,
      phone,
      password: hashedpassword,
      name: fullname,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ message: "successfully created admin" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

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
  let month = todayDate.getMonth();
  let year = todayDate.getFullYear();
  let num = parseInt(lastid) + 1;

  let sequence = num + "";
  while (sequence.length < 6) sequence = "0" + sequence;

  let id = `LMCS/${month}/${year}/${sequence}`;

  return id;
};
