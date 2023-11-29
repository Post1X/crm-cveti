import CheckoutController from "../controllers/CheckoutController";

const express = require('express');
const router = express.Router();

router.get('/day', CheckoutController.getDay);
router.post('/day', CheckoutController.createDay);

export default router;
