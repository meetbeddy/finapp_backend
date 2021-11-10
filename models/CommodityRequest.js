const mongoose = require("mongoose");
const { Schema } = mongoose;

const commodityRequestSchema = new Schema(
  {
    userId: { type: String, required: true },
    grandtotal: { type: Number, required: true },
    markup: { type: Number, required: true },
    repaymentPlan: { type: String, required: true },
    total: { type: Number, required: true },
    items: [],
    acknowledged: {
      type: String,
      enum: ["pending", "seen", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("commodityRequest", commodityRequestSchema);
