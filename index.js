const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/api/user");

const app = express();
app.use(cors());
app.use(express.json());

//database connect
// const db = "mongodb://localhost:27017/finapp";
const db =
  "mongodb+srv://meetbeddy:meetbeddy@cluster0.onuw2.mongodb.net/userdb?retryWrites=true&w=majority";

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
//handle route
app.use("/user", user);

//start app
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
