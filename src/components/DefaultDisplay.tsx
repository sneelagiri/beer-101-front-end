import React, { ReactElement } from "react";
import * as _ from "lodash";
import brewery from "../interfaces/brewery";

interface Props {
  breweries: brewery[];
  countries: Array<string>;
}

export default function DefaultDisplay({
  breweries,
  countries,
}: Props): ReactElement {
  return (
    <div>
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
