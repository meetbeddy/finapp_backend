const mongoose = require("mongoose");
const { Schema } = mongoose;

const loanRequestSchema = new Schema(
  {
    userId: { type: String, required: true },
    loaneeDetails: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    transactionId: { type: String, required: true },
    amount: { type: Number, required: true },
    loanType: { type: String, required: true },
    duration: { type: String, required: true },
    bankName: { type: String, required: true },
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    shareCapital: { type: String, required: true },
    ordinarySavings: { type: String, required: true },
    retirementSavings: String,
    christmasSavings: String,
    educationSavings: String,
    loanBalance: String,
    payable: { type: String, required: true },
    proRata: { type: String, required: true },
    guarantors: [],
    acknowledged: {
      type: String,
      enum: ["pending", "seen", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("loanRequest", loanRequestSchema);
