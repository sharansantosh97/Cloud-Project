
const Sequelize = require('sequelize');

const seq = require('../util/database')

const user = seq.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    firstName:{
            type:Sequelize.STRING,
            allowNull:true
        },
    // lastName:{
    //         type:Sequelize.STRING,
    //         allowNull:true
    // }
    // ,
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    status:{
        type:Sequelize.STRING,
        allowNull:true
    },
    campusName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:true
    }


});

module.exports = user;