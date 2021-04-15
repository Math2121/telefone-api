var express = require("express");
const CelularController = require("../controllers/CelularController");;
var app = express();
var router = express.Router();


router.post('/', CelularController.create);

module.exports = router;