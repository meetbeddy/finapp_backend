const mongoose = require("mongoose");

const { Schema } = mongoose;

const NokSchema = new Schema({
  nok1: String,
  nokAddress1: String,
  nokEmail1: String,
  nokPhone1: String,
  nok2: String,
  nokAddress2: String,
  nokEmail2: String,
  nokPhone2: String,
});

module.exports = mongoose.model("Nok", NokSchema);
