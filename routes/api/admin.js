const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminControllers");
const authController = require("../../controllers/authController");
const auth = require("../../middleware/Auth");
const multerUploads = require("../../middleware/multer").multerUploads;

router.get("/API/confirm/:id", auth, adminController.confirmUser);
router.post("/API/createadmin", auth, adminController.CreateModerator);
router.post("/API/login", adminController.AdminLogin);
router.get("/API/getmembers", adminController.FetchMembers);
router.get("/API/getallusers", auth, adminController.FetchAllUsers);
router.get("/API/getadmin/:id", auth, adminController.getAdmin);
router.post(
  "/API/acknowledgereciept",
  auth,
  adminController.acknowledgeReciept
);
router.post(
  "/API/acknowledgeincreasereciept",
  auth,
  adminController.acknowledgeIncreaseReciept
);
router.post(
  "/API/acknowledgedecreasereciept",
  auth,
  adminController.acknowledgeDecreaseReciept
);
router.post("/API/declinereciept", auth, adminController.declineReciept);
router.post(
  "/API/updateprofile",
  multerUploads,
  authController.updateUserProfile
);

module.exports = router;
