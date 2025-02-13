import { DataTypes } from "sequelize";
import { sequelize } from "../server";


const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    create_time: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    last_login_time: {
        type: DataTypes.DATE(6),
        allowNull: false,
    },
})

module.exports = User;