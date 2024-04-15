import { Repository } from "typeorm";
import { Country, CreateCountryInput } from "../entities/country.entity";
import datasource from "../lib/datasource";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }


  async listCountries() {
    return await this.db.find();
  }

  async findByCode(code: string) {
    const country = await this.db.findOne({ where: { code } });
    if (!country) {
      throw new Error('Country not found');
    }
    return country;
  }

  async listAllinContinent(continent: string) {
    const list = await this.db.find({ where: { continent } });
    if (!list) {
      throw new Error('No countries found on this continent');
    }
    return list;
  }

  async createCountry(data: Partial<CreateCountryInput>) {
    const newCountry = this.db.create(data);
    return await this.db.save(newCountry);
  }
}