const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const EmploymentDetailSchema = new Schema({
  organisationName: { type: String, required: true },
  rank: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  step: { type: String, required: true },
  retirementDate: { type: String, required: true },
  campusName: { type: String, required: true },
  assumptionOfdutyDate: { type: String, required: true },
  ippisNum: String,
  salaryStructure: String,
  faculty: String,
  department: String,
  staffNum: String,
});

module.exports = mongoose.model("EmploymentDetail", EmploymentDetailSchema);
