const express = require('express');
const router = express.Router();
import TestController from "../controllers/TestController";


router.get('/', TestController.test);


module.exports = router;
