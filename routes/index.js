const express = require('express');
const router = express.Router();
import finances from "./finances";
import checkout from "./checkout";
import items from "./items";
import users from "./users";
import pricelist from "./pricelist";
import checks from "./checks";

router.use('/finances', finances);
router.use('/checkout', checkout);
router.use('/items', items);
router.use('/users', users);
router.use('/pricelist', pricelist);
router.use('/checks', checks);

export default router;
