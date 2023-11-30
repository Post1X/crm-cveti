import sequelize from "../services/sequelize";
const ChecksModel = require('../models/checks')(sequelize);

class ChecksController {
    static getChecks = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await ChecksModel.findAll({
                limit: pageSize,
                offset: offset,
            })
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createChecks = async (req, res, next) => {
        try {
            const {
                opentime,
                closetime,
                openby,
                dayid,
                clientid,
                total,
                operationid,
                name,
                comment,
                stationid,
                closedby,
                storn,
                statusid,
                number,
                barcode,
                parentcheckid,
                otkydaid
            } = req.body;
            const check = await ChecksModel.create({
                opentime,
                closetime,
                openby,
                dayid,
                clientid,
                total,
                operationid,
                name,
                comment,
                stationid,
                closedby,
                storn,
                statusid,
                number,
                barcode,
                parentcheckid,
                otkydaid
            });
            res.status(200).json(check);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default ChecksController;
