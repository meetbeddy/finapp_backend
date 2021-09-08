const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/User");
const InitialSaving = require("../models/InitialSavingDetail");

exports.initialSavings = async (req, res) => {
  console.log(req.body);
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
      initialSavingRequest = await InitialSaving.findById(
        user.initialSavingsRequest
      );

      initialSavingRequest().save({
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
      });
    } else {
      initialSavingRequest = await new InitialSaving().save({
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
      });
    }

    user.initialSavingRequest = initialSavingRequest?._id;
    user.save();
  } catch (err) {}
};
