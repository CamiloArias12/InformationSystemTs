import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entity/index.js";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "production",
    synchronize: true,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map