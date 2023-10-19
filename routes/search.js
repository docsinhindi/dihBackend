const express = require("express");
const handleSearch = require("../controller/search");
const router = express.Router();


router.get('/',handleSearch);

module.exports = router;