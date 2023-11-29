const express = require('express');
import ItemsController from "../controllers/ItemsController";
import upload from "../utilities/multer";

const router = express.Router();
const uploadFields = upload.any();

router.get('/', ItemsController.getItems);
router.post('/', ItemsController.createItem);
router.post('/group', ItemsController.createItemGroup);
router.get('/group', ItemsController.getItemGroups);
router.post('/image', ItemsController.createItemImage);
router.post('/upload-image', uploadFields, ItemsController.uploadImage);
router.post('/measure', ItemsController.createMeasure);

export default router;
