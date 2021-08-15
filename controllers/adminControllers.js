const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");

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

exports.FetchUsers = async (req, res) => {
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
