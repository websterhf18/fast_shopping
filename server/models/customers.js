'use strict';
module.exports = (sequelize, DataTypes) => {
    var Customers = sequelize.define('Customers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
    },{
        timestamps: false
    });
    return Customers;
};