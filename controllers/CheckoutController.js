import sequelize from "../services/sequelize";
const DayModel = require('../models/day')(sequelize);

class CheckoutController {
    static createDay = async (req, res, next) => {
        try {
            const {
                opentime,
                closetime,
                total,
                stationid,
                openby,
                closedby,
                number
            } = req.body;
            const day = await DayModel.create({
                opentime,
                closedby,
                closetime,
                total,
                stationid,
                openby,
                number
            });
            res.status(200).json(day);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getDay = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await DayModel.findAll({
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

export default CheckoutController;
