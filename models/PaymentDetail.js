const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const PaymentDetailSchema = new Schema({
  tellerName: { type: String, required: true },
  tellerRefNum: { type: String, required: true },
  amount: { type: String, required: true },
  paymentDate: { type: String, required: true },
  bankName: { type: String, required: true },
});

module.exports = mongoose.model("PaymentDetail", PaymentDetailSchema);
