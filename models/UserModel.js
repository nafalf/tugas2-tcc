import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const User = db.define(
    "user", 
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING
    }
)

db.sync().then(() => console.log("Database Synchronized"))

export default User;