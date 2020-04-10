import React, { ReactElement } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import * as _ from "lodash";

interface Props {
  countries: Array<string>;
  filteredCountries: Array<string>;
  countryFilter: (country: string) => void;
}

export default function Filters({
  countries,
  filteredCountries,
  countryFilter,
}: Props): ReactElement {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        variant="warning"
        title="Country"
      >
        <Dropdown.Item
          onClick={() => {
            countryFilter("All");
          }}
        >
          All
        </Dropdown.Item>
        {filteredCountries.length > 0
          ? _.map(filteredCountries, (country) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    countryFilter(country);
                  }}
                >
                  {country}
                </Dropdown.Item>
              );
            })
          : _.map(countries, (country) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    countryFilter(country);
                  }}
                >
                  {country}
                </Dropdown.Item>
              );
            })}
      </DropdownButton>
      <DropdownButton
        id="dropdown-basic-button"
        variant="warning"
        title="Filters"
      >
        <Dropdown.Item
          onClick={() => {
            countryFilter("All");
          }}
        >
          All
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
