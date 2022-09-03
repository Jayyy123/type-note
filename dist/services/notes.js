"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const notes_1 = require("../models/notes");
// new sequelize connection.
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    database: "mysql",
    models: [notes_1.Notes],
    logging: false,
    username: "root"
});
exports.default = connection;
