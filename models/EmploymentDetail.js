const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const EmploymentDetailSchema = new Schema({
  organisationName: { type: String, required: true },
  rank: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  step: { type: String, required: true },
  retirementDate: { type: String, required: true },
  ippisNum: String,
  campusName: { type: String, required: true },
  salaryStructure: String,
  faculty: String,
  department: String,
});

module.exports = mongoose.model("EmploymentDetail", EmploymentDetailSchema);
