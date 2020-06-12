'use strict';
module.exports = (sequelize, DataTypes) => {
    var Products = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        unit_price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
    },{
        timestamps: false
    });
    Products.associate = (models) => {
        models.Products.belongsTo(models.Categories, { foreignKey: 'categories_id', as: 'category' });
    };
    return Products;
};