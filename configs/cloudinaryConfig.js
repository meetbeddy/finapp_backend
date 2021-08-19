const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

exports.cloudConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: "lmcs",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });
  exports.uploader = cloudinary.uploader;
  next();
};
