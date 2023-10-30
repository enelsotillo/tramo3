import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const productModel = sequelize.define('productos', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    
    stop: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    timestamps: true
})