import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_PORT
} = process.env;

const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: 'postgres',
});

export default sequelize;
