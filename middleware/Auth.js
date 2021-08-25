const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).json({ message: "No token, Not Authourised" });
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token is Not Valid" });
  }
};
module.exports = auth;
