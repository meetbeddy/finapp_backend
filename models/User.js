const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const { USER_LEVEL } = require("../constants/accessLevel");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  title: String,
  homeAddress: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  signature: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: String,
  memberId: { type: String, default: "pending approval" },
  accessLevel: {
    type: Number,
    default: USER_LEVEL,
  },
  confirmedBy: String,
  paymentDetails: {
    type: Schema.Types.ObjectId,
    ref: "PaymentDetail",
  },
  employmentDetails: {
    type: Schema.Types.ObjectId,
    ref: "EmploymentDetail",
  },
  initialSavingsRequest: {
    type: Schema.Types.ObjectId,
    ref: "InitialSaving",
  },
  category: { type: String, required: true },
  passport: { type: String, required: true },
  emailStatus: {
    type: String,
    enum: ["pending", "active", "declined"],
    default: "pending",
  },
  confirmationCode: { type: String, unique: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema);
