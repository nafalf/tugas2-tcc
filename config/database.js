import{ Sequelize } from "sequelize";

const db = new Sequelize("tcc-2", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db;