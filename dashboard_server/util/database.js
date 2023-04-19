
const Sequelize = require('sequelize');


const seq = new Sequelize('dashboard','root','Sharan1997',
    {dialect:'mysql',host:'127.0.0.1'});
module.exports = seq;

console.log(process.env.PASS);