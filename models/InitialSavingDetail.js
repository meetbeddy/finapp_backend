const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const InitialSavingSchema = new Schema({
  ordinarySavingsAmount: String,
  ordinarySavingsMonths: String,
  shareCapitalAmount: String,
  shareCapitalMonths: String,
  christmasSavingsAmount: String,
  christmasSavingsMonths: String,
  educationSavingsAmount: String,
  educationSavingsMonths: String,
  retirementSavingsAmount: String,
  retirementSavingsMonths: String,
});

module.exports = mongoose.model("InitialSaving", InitialSavingSchema);
