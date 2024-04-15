import CountryService from "../services/country.service";
import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Country, CreateCountryInput } from "../entities/country.entity";

@Resolver()
export default class CountryResolver {

  @Query(() => [Country])
  async countries() {
    return await new CountryService().listCountries();
  }

  @Query(() => Country)
  async country(@Arg("code") code: string) {
    return await new CountryService().findByCode(code);
  }

  @Query(() => [Country])
  async countriesInContinent(@Arg("continent") continent: string) {
    return await new CountryService().listAllinContinent(continent);
  }

  @Mutation(() => Country)
  async createCountry(@Arg("infos") infos: CreateCountryInput) {
    const newCountry = await new CountryService().createCountry(infos);
    return newCountry;
  }

}