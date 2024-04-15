import { Country } from "../entities/country.entity";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "newcountries.sqlite",
  synchronize: true,
  entities: [Country],
  logging: ["error", "query"],
});