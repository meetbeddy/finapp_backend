const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReferalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  referedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  username: { type: String },
});

module.exports = mongoose.model("Referal", ReferalSchema);
