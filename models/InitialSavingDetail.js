const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const InitialSavingSchema = new Schema({
  ordinarySavingsAmount: { type: String, required: true },
  ordinarySavingsMonths: { type: String, required: true },
  shareCapitalAmount: { type: String, required: true },
  shareCapitalMonths: { type: String, required: true },
  christmasSavingsAmount: String,
  christmasSavingsMonths: String,
  educationSavingsAmount: String,
  educationSavingsMonths: String,
  retirementSavingsAmount: String,
  retirementSavingsMonths: String,
});

module.exports = mongoose.model("InitialSaving", InitialSavingSchema);
