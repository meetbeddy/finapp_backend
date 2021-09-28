const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const referalSchema = new Schema({
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
  username: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Referal", referalSchema);
