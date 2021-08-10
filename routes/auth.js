const express = require("express");
const { register, login, getUserDetails } = require("../controllers/auth");
const { decryptToken } = require("../middleware/auth");

//Create the routers
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/currentUser", decryptToken, getUserDetails);

module.exports = router;
