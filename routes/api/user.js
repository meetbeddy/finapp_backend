const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const multerUploads = require("../../middleware/multer").multerUploads;

router.post("/API/signin", authController.signIn);
router.post("/API/signup", multerUploads, authController.signUp);
router.get("/getuser/:id", authController.getUser);

// router.post("/updateprofile", authController.updateUserProfile);

module.exports = router;
