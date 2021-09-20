const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lastMemberIdSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  memberId: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("lastmemberid", lastMemberIdSchema);
