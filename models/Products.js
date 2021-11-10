const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  variations: [],
  prices: [],
  productImage: String,
  description: String,
  productStatus: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
});

module.exports = mongoose.model("Product", productSchema);
