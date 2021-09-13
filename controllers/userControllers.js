const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");
const InitialSavingDetail = require("../models/InitialSavingDetail");

exports.initialSavings = async (req, res) => {
  const {
    christmasSavingsAmount,
    christmasSavingsMonths,
    educationSavingsAmount,
    educationSavingsMonths,
    ordinarySavingsAmount,
    ordinarySavingsMonths,
    retirementSavingsAmount,
    retirementSavingsMonths,
    shareCapitalAmount,
    shareCapitalMonths,
  } = req.body;
  try {
    const user = await User.findOne({ _id: req.user.id });

    let initialSavingRequest;
    if (user.initialSavingsRequest) {
      const update = {
        christmasSavingsAmount,
        christmasSavingsMonths,
        educationSavingsAmount,
        educationSavingsMonths,
        ordinarySavingsAmount,
        ordinarySavingsMonths,
        retirementSavingsAmount,
        retirementSavingsMonths,
        shareCapitalAmount,
        shareCapitalMonths,
      };
      initialSavingRequest = await InitialSavingDetail.findOneAndUpdate(
        user.initialSavingsRequest,
        update
      );
      return;
    } else {
      initialSavingRequest = await new InitialSavingDetail({
        christmasSavingsAmount,
        christmasSavingsMonths,
        educationSavingsAmount,
        educationSavingsMonths,
        ordinarySavingsAmount,
        ordinarySavingsMonths,
        retirementSavingsAmount,
        retirementSavingsMonths,
        shareCapitalAmount,
        shareCapitalMonths,
      }).save();
    }

    user.initialSavingsRequest = initialSavingRequest._id;

    user.save();
    res.status(200).json({ message: "successfully sent " });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
