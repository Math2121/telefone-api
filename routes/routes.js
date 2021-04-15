var express = require("express");
const CelularController = require("../controllers/CelularController");;
var app = express();
var router = express.Router();

router.get('/', CelularController.index);
router.get('/celphone/:code', CelularController.findOnePhone);
router.delete('/celphone/:code', CelularController.destroy);
router.put('/celphone/:id', CelularController.update);
router.post('/create', CelularController.create);

module.exports = router;