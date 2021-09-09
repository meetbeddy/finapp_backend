const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");
const InitialSaving = require("../models/InitialSavingDetail");

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
    if (("one", user.initialSavingsRequest)) {
      console.log(user.initialSavingsRequest);
      initialSavingRequest = await InitialSaving.findById(
        user.initialSavingsRequest
      );
      initialSavingRequest.inchristmasSavingsAmount = christmasSavingsAmount;
      initialSavingRequest.christmasSavingsMonths = christmasSavingsMonths;
      initialSavingRequest.educationSavingsAmount = educationSavingsAmount;
      initialSavingRequest.educationSavingsMonths = educationSavingsMonths;
      initialSavingRequest.ordinarySavingsAmount = ordinarySavingsAmount;
      initialSavingRequest.ordinarySavingsMonths = ordinarySavingsMonths;
      initialSavingRequest.retirementSavingsAmount = retirementSavingsAmount;
      initialSavingRequest.retirementSavingsMonths = retirementSavingsMonths;
      initialSavingRequest.shareCapitalAmount = shareCapitalAmount;
      initialSavingRequest.shareCapitalMonths = shareCapitalMonths;
      initialSavingRequest.save();
    } else {
      initialSavingRequest = await new InitialSaving({
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
      }).save();
    }
    console.log(initialSavingRequest);
    user.initialSavingsRequest = initialSavingRequest._id;
    console.log("two", user);
    user.save();
    res.status(200).json({ message: "successfully sent " });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
