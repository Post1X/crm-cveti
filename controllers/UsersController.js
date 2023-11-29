const sequelize = require("../services/sequelize");
const Users = require('../models/users')(sequelize);
const Clients = require('../models/client')(sequelize);

class UsersController {
    static getUsers = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await Users.findAll({
                limit: pageSize, offset: offset,
            });
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createUser = async (req, res, next) => {
        try {
            const {
                usergroupid, name, code, password, fiscalname
            } = req.body;
            const user = await Users.create({
                usergroupid, name, code, password, fiscalname
            });
            res.status(200).json(user);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static getClients = async (req, res, next) => {
        try {
            const {page, pageSize} = req.query;
            const offset = (page - 1) * pageSize;
            const items = await Clients.findAll({
                limit: pageSize, offset: offset,
            });
            res.status(200).json(items);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
    //
    static createClient = async (req, res, next) => {
        try {
            const {
                firstname,
                clientgroupid,
                phone,
                address,
                card,
                comment,
                createtime,
                createcomment
            } = req.body;
            const user = await Clients.create({
                firstname,
                clientgroupid,
                phone,
                address,
                card,
                comment,
                createtime,
                createcomment
            });
            res.status(200).json(user);
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default UsersController;
