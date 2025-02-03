
const sequelize = require("./dbtest");

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = connection;