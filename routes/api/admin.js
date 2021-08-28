const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminControllers");
const auth = require("../../middleware/Auth");

router.post("/API/confirm/:id", auth, adminController.confirmUser);
router.post("/API/createadmin", auth, adminController.CreateModerator);
router.post("/API/login", adminController.AdminLogin);
router.get("/API/getmembers", adminController.FetchMembers);
router.get("/API/getallusers", adminController.FetchAllUsers);

module.exports = router;
