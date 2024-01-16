const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Note', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        archived: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, { timestamps: false });
};