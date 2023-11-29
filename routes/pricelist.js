const express = require('express');
const router = express.Router();
import PriceListController from "../controllers/PriceListController";

router.get('/', PriceListController.getPriceList);
router.post('/', PriceListController.createPricelist);
router.post('/price', PriceListController.createPrice);
router.get('/price', PriceListController.getPrice);
router.post('/type')

export default router;
