const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const EmploymentDetailSchema = new Schema({
  organisationName: { type: String, required: true },
  rank: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  step: { type: String, required: true },
  retirementDate: { type: String, required: true },
});

module.exports = mongoose.model("EmploymentDetail", EmploymentDetailSchema);
