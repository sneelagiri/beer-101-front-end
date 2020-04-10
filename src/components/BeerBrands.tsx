import React, { Component } from "react";
import * as superagent from "superagent";
import * as _ from "lodash";
import brewery from "../interfaces/brewery";

interface Props {}
interface State {
  breweries: brewery[];
  countries: Array<string>;
}

export default class BeerBrands extends Component<Props, State> {
  state = {
    breweries: [],
    countries: [],
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
    const trueOrFalse: Array<boolean> = _.map(breweries, (brewery) => {
      if (!brewery.images) {
        return false;
      }
      return true;
    });
    console.log(trueOrFalse);
    // Used Lodash uniq to quickly and easily get rid of duplicates
    const countries: Array<string> = _.uniq(countryPerBrewery);
    this.setState({ breweries: breweries, countries: countries });
    console.log(breweries);
  }
  render() {
    const breweries: brewery[] = [...this.state.breweries];
    const countries: Array<string> = [...this.state.countries];

    return (
      <div>
        <h1>🍺Beer Brands🍺</h1>
        {breweries && countries ? (
          <div>
            {_.map(countries, (country) => {
              return (
                <div>
                  <h2>{country}</h2>
                  <ul>
                    {_.map(breweries, (brewery) => {
                      if (
                        brewery.locations &&
                        brewery.locations[0].country.displayName === country
                      ) {
                        return (
                          <div>
                            <li>{brewery.name}</li>
                          </div>
                        );
                      } else if (
                        !brewery.locations &&
                        country === "United States"
                      ) {
                        return (
                          <div>
                            <li>{brewery.name}</li>
                          </div>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
