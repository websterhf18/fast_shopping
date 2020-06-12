'use strict';
module.exports = (sequelize, DataTypes) => {
    var Orders = sequelize.define('Orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        status: DataTypes.STRING,
        customers_id: DataTypes.INTEGER,
        createdAt: { type: DataTypes.DATE, field: 'create_time' },
        updatedAt: { type: DataTypes.DATE, field: 'update_time' }
    });
    return Orders;
};