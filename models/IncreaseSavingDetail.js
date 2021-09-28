const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const IncreaseSavingSchema = new Schema({
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
  acknowledged: {
    type: String,
    enum: ["pending", "seen", "declined"],
    default: "pending",
  },
  requestedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("IncreaseSaving", IncreaseSavingSchema);
