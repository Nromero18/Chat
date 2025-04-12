const express = require("express")
const { addChat, getChats } = require("../controllers/chatcontrollers")
const router = express.Router()

router.post("/add", addChat)
router.get("/", getChats)

module.exports = router
