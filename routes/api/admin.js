const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminControllers");

router.post("/API/confirm/:id", adminController.confirmUser);
router.get("/API/getmembers", adminController.FetchUsers);

module.exports = router;
