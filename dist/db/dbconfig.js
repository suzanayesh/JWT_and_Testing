import { DataSource } from "typeorm";
import { Profile } from "./entities/Profile.js";
import { Role } from "./entities/Role.js";
import { User } from "./entities/User.js";
const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hw2',
    entities: [
        Profile,
        Role,
        User
    ],
    migrations: ['./**/migration/*.ts'],
    synchronize: true,
    logging: true
});
export const initDB = async () => await dataSource.initialize().then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
export default dataSource;
