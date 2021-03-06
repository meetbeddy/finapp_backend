const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { resolve } = require("path");
const cloudinaryConfig = require("./configs/cloudinaryConfig").cloudConfig;

const user = require("./routes/api/user");
const admin = require("./routes/api/admin");

const env = require("dotenv");
env.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.static(resolve(__dirname, "public")));
app.use("*", cloudinaryConfig);

//database connect
// const db = "mongodb://localhost:27017/finapp";
const db = process.env.DB_URI;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

//handle route
app.use("/user", user);
app.use("/admin", admin);

//start app
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
