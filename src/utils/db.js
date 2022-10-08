const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DBHOST,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
});

module.exports = db