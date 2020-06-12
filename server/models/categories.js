'use strict';
module.exports = (sequelize, DataTypes) => {
    var Categories = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        slug: DataTypes.STRING,
        name: DataTypes.STRING
    },{
        timestamps: false
    });
    return Categories;
};