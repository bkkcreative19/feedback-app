import { DataSource } from "typeorm";
import * as entities from "../entities";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "basketball10",
  database: "product-feedback",
  entities: ["src/entities/*.ts"],
  synchronize: true,
});

export { AppDataSource };
