import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./users/user.model";

export const AppDataSource = new DataSource({
    type: "mysql", 
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Sancija-11",  
    database: "node-mysql-crud-api",
    synchronize: true, 
    logging: false,
    entities: [User],  
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => console.log("Database Connected!"))
    .catch((error) => console.log(" DB Connection Error:", error));
