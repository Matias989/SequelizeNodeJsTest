import {Sequelize} from 'sequelize';

const sequelizeInstance = new Sequelize('database', 'user', 'pass', {
    host: 'host',
    dialect: 'mysql'
});

export default sequelizeInstance;

