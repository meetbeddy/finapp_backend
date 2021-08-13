const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  homeAddress: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  memberId: { type: String, default: "pending approval" },
  paymentDetails: { type: Schema.Types.ObjectId, ref: "PaymentDetail" },
  employmentDetails: { type: Schema.Types.ObjectId, ref: "EmploymentDetail" },
});

module.exports = mongoose.model("User", userSchema);
