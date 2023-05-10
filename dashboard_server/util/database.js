
const Sequelize = require('sequelize');


const seq = new Sequelize('cameraSurveillance', 'root', 'admin',
    { dialect: 'mysql', host: 'localhost' });
module.exports = seq;

seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    seq.sync();
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


console.log(process.env.PASS);