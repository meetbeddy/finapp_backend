const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");

exports.confirmUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.find({
    _id: id,
  });

  const lastUser = await User.find({ confirmed: true })
    .sort({ _id: -1 })
    .limit(1);

  const lastUserMemberId = lastUser?.memberId?.slice(-6);

  const memberId = generateMemberId(lastUserMemberId);

  user.confirmed = true;
  user.memberId = memberId;
  user.save();
  res.status(200).json({ message: "user confirmed successfully" });
};

exports.FetchUsers = async (req, res) => {
  try {
    const users = await User.find({
      confirmed: true,
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

//LMCS/month/year/sixdigitsequence
generateMemberId = (lastid) => {
  let todayDate = new Date();
  let month = todayDate.getMonth();
  let year = todayDate.getFullYear();
  let sequence = parseInt(lastid);
  let id = `LMCS/${month}/${year}/${sequence + 1}`;
  return id;
};
