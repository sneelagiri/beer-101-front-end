import React, { ReactElement } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as _ from "lodash";
import "./homepage.css";

interface Props {
  countries: Array<string>;
  filteredCountries: Array<string>;
  countryFilter: (country: string) => void;
  brandTypeFilter: (selectedFilter: string) => void;
}

export default function Filters({
  countries,
  filteredCountries,
  countryFilter,
  brandTypeFilter,
}: Props): ReactElement {
  return (
    <Container className="filterRow">
      <Row className="justify-content-md-center">
        <Col className="rightAlign">
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
        </Col>
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            variant="warning"
            title="Filters"
          >
            <Dropdown.Item
              onClick={() => {
                brandTypeFilter("all");
              }}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                brandTypeFilter("organic");
              }}
            >
              Organic Brands
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                brandTypeFilter("verified");
              }}
            >
              Verified Brands
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                brandTypeFilter("mass");
              }}
            >
              Mass-Owned Brands
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                countryFilter("operational");
              }}
            >
              Operational Brands
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
}
