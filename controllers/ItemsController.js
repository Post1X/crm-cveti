import sequelize from "../services/sequelize";

const ItemModel = require('../models/item')(sequelize);
const ItemGroupModel = require('../models/itemgroup')(sequelize);
const MeasureModel = require('../models/measure')(sequelize);
const ItemImageModel = require('../models/itemimage')(sequelize);

class ItemsController {
    static getItems = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await ItemModel.findAll({
                limit: pageSize,
                offset: offset,
            });
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createItem = async (req, res, next) => {
        try {
            const {
                name,
                itemgroupid,
                avaliable,
                nodiscount,
                service,
                measureid,
                // onlywhole,
                discription,
                code,
                nobonus,
                deleted
            } = req.body;
            const ItemGroup = await ItemGroupModel.findOne({
                itemgroupid: itemgroupid
            });
            const newItem = await ItemModel.create({
                name,
                itemgroupid,
                avaliable,
                onlywhole: ItemGroup.onlywhole,
                nodiscount,
                service,
                measureid,
                code,
                discription,
                nobonus,
                deleted
            });
            res.status(200).json(newItem);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createItemGroup = async (req, res, next) => {
        try {
            const {
                name,
                itemgroupid,
                parentid,
                avaliable,
                onlywhole,
                deleted
            } = req.body;
            const newItemGroup = await ItemGroupModel.create({
                name,
                itemgroupid,
                parentid,
                avaliable,
                onlywhole,
                deleted
            });
            res.status(200).json(newItemGroup);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getItemGroups = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await ItemGroupModel.findAll({
                limit: pageSize,
                offset: offset,
            });
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createMeasure = async (req, res, next) => {
        try {
            const {name} = req.body;
            const newMeasure = await MeasureModel.create({
                name
            });
            res.status(200).json(newMeasure);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static uploadImage = async (req, res, next) => {
        try {
            const file = req.files.find(file => file.fieldname === 'file');
            const parts = file.path.split('public');
            const finalFile = `http://localhost:3001/${parts[1].substring(1)}`;
            res.status(200).json(
                finalFile
            )
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createItemImage = async (req, res, next) => {
        try {
            const {link, itemid} = req.body;
            const newImage = await ItemImageModel.create({
                link,
                itemid
            });
            res.status(200).json(newImage);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default ItemsController;
