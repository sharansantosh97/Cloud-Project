
const Sequelize = require('sequelize');


const seq = new Sequelize('dashboard', 'root', 'Sharan1997',
    { dialect: 'mysql', host: 'localhost' });
module.exports = seq;

console.log(process.env.PASS);