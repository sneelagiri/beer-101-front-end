import React, { ReactElement } from "react";
import * as _ from "lodash";
import Card from "react-bootstrap/Card";
import brewery from "../interfaces/brewery";
import "./homepage.css";

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
                <div className="cardDisplay">
                  {_.map(breweries, (brewery) => {
                    if (
                      brewery.locations &&
                      brewery.locations[0].country.displayName === country
                    ) {
                      return (
                        <Card
                          border="warning"
                          style={{ width: "18rem" }}
                          className="brandCards"
                        >
                          {brewery.images ? (
                            <Card.Img
                              className="imageSize"
                              variant="top"
                              src={brewery.images.medium}
                            />
                          ) : (
                            <Card.Img
                              className="noLogo"
                              variant="top"
                              src="https://image.flaticon.com/icons/svg/1087/1087972.svg"
                            />
                          )}

                          <Card.Body>
                            <Card.Title>{brewery.name}</Card.Title>
                          </Card.Body>
                        </Card>
                      );
                    } else if (
                      !brewery.locations &&
                      country === "United States"
                    ) {
                      return (
                        <Card
                          border="warning"
                          style={{ width: "18rem" }}
                          className="brandCards"
                        >
                          {brewery.images ? (
                            <Card.Img
                              className="imageSize"
                              variant="top"
                              src={brewery.images.medium}
                            />
                          ) : (
                            <Card.Img
                              className="noLogo"
                              variant="top"
                              src="https://image.flaticon.com/icons/svg/1087/1087972.svg"
                            />
                          )}
                          <Card.Body>
                            <Card.Title>{brewery.name}</Card.Title>
                          </Card.Body>
                        </Card>
                      );
                    }
                  })}
                </div>
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
