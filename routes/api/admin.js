const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminControllers");

router.post("/API/confirm/:id", adminController.confirmUser);
router.post("/API/createadmin", adminController.CreateModerator);
router.post("/API/login", adminController.AdminLogin);
router.get("/API/getmembers", adminController.FetchMembers);

module.exports = router;
