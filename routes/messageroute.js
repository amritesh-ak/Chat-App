const express = require("express");
const {getMessage,sendMessage} = require("../controllers/messagecontroller.js");
const isAuthenticated = require("../middlewares/isauthenticated.js");
const upload = require("../multer.js");

const router = express.Router();

router.post("/send/:id",isAuthenticated,upload.single("file"),sendMessage);

router.get("/:id",isAuthenticated, getMessage);

module.exports = router;