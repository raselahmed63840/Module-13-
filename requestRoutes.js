const express = require("express");
const router = express.Router();
const { getRequest, postRequest } = require("./controller/requestController");

router.get("/get", getRequest);
router.post("/post", postRequest);

module.exports = router;
