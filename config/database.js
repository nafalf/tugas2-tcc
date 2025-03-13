import{ Sequelize } from "sequelize";

const db = new Sequelize("tugas2-tcc-notes", "root", "", {
    host: "34.71.69.109",
    dialect: "mysql"
})

export default db;
