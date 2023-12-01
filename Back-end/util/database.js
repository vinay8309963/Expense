const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenses' ,'root' , 'vinay@992106',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;