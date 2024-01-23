require('dotenv').config()
const { Sequelize } = require('sequelize');

const {DATABASE, MYSQL_USER, MYSQL_PASSWORD , MYSQL_HOST, DB_DIALECT} = process.env

const sequelize = new Sequelize(DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: DB_DIALECT
  });


sequelize.authenticate().then(() => {
    console.log("connection is Successfull");
}).catch((error) => {
    console.error(error)
})

module.exports = sequelize;