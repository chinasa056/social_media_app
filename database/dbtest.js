const Sequelize = require("sequelize")

const sequelize = new Sequelize('social_media_app', 'root', 'Acha105#', {
    host: '127.0.0.1',
    dialect: "mysql"
});
module.exports = sequelize;