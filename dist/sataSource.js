"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_js_1 = require("./entities/User.js");
const Role_js_1 = require("./entities/Role.js");
const Profile_js_1 = require("./entities/Profile.js");
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hw2',
    entities: [
        Profile_js_1.Profile,
        Role_js_1.Role,
        User_js_1.User
    ],
    migrations: ['./**/migration/*.ts'],
    synchronize: true,
    logging: true
});
dataSource.initialize().then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
exports.default = dataSource;
