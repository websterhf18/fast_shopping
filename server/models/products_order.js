'use strict';
module.exports = (sequelize, DataTypes) => {
    var Products_Order = sequelize.define('Products_Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: DataTypes.STRING,
        products_id: DataTypes.INTEGER,
        orders_id: DataTypes.INTEGER
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'products_order'
    });
    return Products_Order;
};