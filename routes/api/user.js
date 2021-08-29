const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const multerUploads = require("../../middleware/multer").multerUploads;
const auth = require("../../middleware/Auth");

router.post("/API/signin", authController.signIn);
router.post("/API/signup", multerUploads, authController.signUp);
router.get("/getuser/:id", auth, authController.getUser);
router.get("./sendemailconfirmation/:id", authController.sendEmailConfirmation);
router.get("/emailconfirmation/:confirmationcode", authController.verifyEmail);

// router.post("/updateprofile", authController.updateUserProfile);

module.exports = router;
