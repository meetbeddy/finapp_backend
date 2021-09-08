const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const InitialSavingSchema = new Schema({
  christmasSavingsAmount: String,
  christmasSavingsMonths: String,
  educationSavingsAmount: String,
  educationSavingsMonths: String,
  ordinarySavingsAmount: { type: String, required: true },
  ordinarySavingsMonths: { type: String, required: true },
  retirementSavingsAmount: String,
  retirementSavingsMonths: String,
  shareCapitalAmount: { type: String, required: true },
  shareCapitalMonths: { type: String, required: true },
});

module.exports = mongoose.model("InitialSaving", InitialSavingSchema);
