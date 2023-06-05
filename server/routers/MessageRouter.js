const express = require("express");
const router = express.Router();
const messageController = require("../app/controllers/MessageController");

router.post("/", messageController.send);
router.get("/", (req, res) => {
  res.send("Message.. get method");
});

module.exports = router;
