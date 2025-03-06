import{ Sequelize } from "sequelize";

const db = new Sequelize("tugas2-tcc-notes", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db;