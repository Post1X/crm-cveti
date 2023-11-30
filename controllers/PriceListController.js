import sequelize from "../services/sequelize";

const PricelistModel = require('../models/pricelist')(sequelize);
const PriceModel = require('../models/price')(sequelize);
const PriceTypeModel = require('../models/payment')(sequelize);
const ItemModel = require('../models/item')(sequelize);


class PriceListController {
    static createPricelist = async (req, res, next) => {
        try {
            const {name} = req.body;
            const pricelist = await PricelistModel.create({
                name
            });
            res.status(200).json(pricelist);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getPriceList = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await PricelistModel.findAll({
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
    static createPrice = async (req, res, next) => {
        try {
            const {
                pricelistid,
                itemid,
                measureid,
                price
            } = req.body;
            const priceitem = await PriceModel.create({
                pricelistid,
                itemid,
                measureid,
                price
            })
            res.status(200).json(priceitem);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getPrice = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await PriceModel.findAll({
                limit: pageSize,
                offset: offset,
                include: [
                    {
                        model: PricelistModel
                    },
                    {
                        model: ItemModel
                    }
                ]
            })
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createPricetype = async (req, res, next) => {
        try {
            const {
                name,
                active,
                fiscal
            } = req.body;
            const pricetype = await PriceTypeModel.create({
                name,
                active,
                fiscal
            });
            res.status(200).json(pricetype);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getPricetype = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await PriceTypeModel.findAll({
                limit: pageSize,
                offset: offset,
            })
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default PriceListController;
