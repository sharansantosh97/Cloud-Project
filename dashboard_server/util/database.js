
const Sequelize = require('sequelize');


const seq = new Sequelize('dashboard','root',process.env.PASS,
    {dialect:'mysql',host:'127.0.0.1'});
module.exports = seq;
