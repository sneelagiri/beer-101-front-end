import React, { Component } from "react";
import * as superagent from "superagent";
import * as _ from "lodash";
import brewery from "../interfaces/brewery";
import Search from "./Search";
import Filters from "./Filters";
import DefaultDisplay from "./DefaultDisplay";

interface Props {}
interface State {
  breweries: brewery[];
  countries: Array<string>;
  searchQuery: string;
  filteredBreweries: brewery[];
  filteredCountries: Array<string>;
}

export default class BeerBrands extends Component<Props, State> {
  state = {
    breweries: [],
    countries: [],
    searchQuery: "",
    filteredBreweries: [],
    filteredCountries: [],
  };
  async componentDidMount() {
    const fetchBreweries = await superagent.get(
      `http://localhost:4000/breweries`
    );
    const breweries: brewery[] = fetchBreweries.body.data;
    // Used Lodash map here because it is faster than the native map method
    const countryPerBrewery: Array<string> | void[] = _.map(
      breweries,
      (brewery) => {
        if (brewery.locations) {
          return brewery.locations[0].country.displayName;
        }
        const unspecified: string = "United States";
        return unspecified;
      }
    );
    // Used Lodash uniq to quickly and easily get rid of duplicates
    const countries: Array<string> = _.uniq(countryPerBrewery);
    this.setState({ breweries: breweries, countries: countries });
  }

  searchQuery = (keyword: string) => {
    if (keyword) {
      const allBreweries: brewery[] = [...this.state.breweries];
      const filteredBreweries: brewery[] = _.filter(allBreweries, (brewery) =>
        _.includes(brewery.name.toLowerCase(), keyword.toLowerCase())
      );
      const countryPerBrewery: Array<string> | void[] = _.map(
        filteredBreweries,
        (brewery) => {
          if (brewery.locations) {
            return brewery.locations[0].country.displayName;
          }
          const unspecified: string = "United States";
          return unspecified;
        }
      );
      const countries: Array<string> = _.uniq(countryPerBrewery);
      this.setState({
        filteredBreweries: filteredBreweries,
        filteredCountries: countries,
        searchQuery: keyword,
      });
    } else {
      this.setState({
        searchQuery: "",
        filteredBreweries: [],
        filteredCountries: [],
      });
    }
  };

  render() {
    const breweries: brewery[] = [...this.state.breweries];
    const countries: Array<string> = [...this.state.countries];
    const filteredBreweries: brewery[] = [...this.state.filteredBreweries];
    const filteredCountries: Array<string> = [...this.state.filteredCountries];

    return (
      <div>
        <h1>🍺Beer Brands 101🍺</h1>
        <Search searchQuery={this.searchQuery} />
        <Filters />
        {this.state.searchQuery && filteredBreweries.length === 0 ? (
          <h1>No matching results</h1>
        ) : this.state.searchQuery ? (
          <DefaultDisplay
            breweries={filteredBreweries}
            countries={filteredCountries}
          />
        ) : breweries ? (
          <DefaultDisplay breweries={breweries} countries={countries} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
