const multer = require("multer");
const DataUri = require("datauri");
const DatauriParser = require("datauri/parser");

const path = require("path");

const storage = multer.memoryStorage();
exports.multerUploads = multer({ storage }).single("image");

const dUri = new DatauriParser();
exports.dataUri = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
