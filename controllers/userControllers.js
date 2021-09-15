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
  } = req.body.formdata;

  try {
    const user = await User.findOne({ email: req.user.email });

    let initialSavingRequest;

    if (user.initialSavingsRequest) {
      const update = {
        christmasSavingsAmount: christmasSavingsAmount,
        christmasSavingsMonths: christmasSavingsMonths,
        educationSavingsAmount: educationSavingsAmount,
        educationSavingsMonths: educationSavingsMonths,
        ordinarySavingsAmount: ordinarySavingsAmount,
        ordinarySavingsMonths: ordinarySavingsMonths,
        retirementSavingsAmount: retirementSavingsAmount,
        retirementSavingsMonths: retirementSavingsMonths,
        shareCapitalAmount: shareCapitalAmount,
        shareCapitalMonths: shareCapitalMonths,
      };

      const filter = { _id: user.initialSavingsRequest };
      initialSavingRequest = await InitialSavingDetail.findOneAndUpdate(
        filter,
        update,
        { new: true }
      );
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
