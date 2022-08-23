import { Sequelize } from "sequelize-typescript";
import { Notes } from "../models/notes";


const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    database:"mysql",
    models:[Notes],
    logging: false,
    username: "root"
})


export default connection;