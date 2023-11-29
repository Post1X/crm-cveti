const express = require('express');
const router = express.Router();
import UsersController from "../controllers/UsersController";


router.get('/employee', UsersController.getUsers);
router.post('/employee', UsersController.createUser);
router.get('/client', UsersController.getClients);
router.post('/client', UsersController.createClient);

export default router;
