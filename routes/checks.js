import ChecksController from "../controllers/ChecksController";

const express = require('express');
const router = express.Router();

router.get('/', ChecksController.getChecks);
router.post('/', ChecksController.createChecks);

export default router;
