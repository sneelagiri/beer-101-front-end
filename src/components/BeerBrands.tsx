import React, { Component } from "react";
import * as superagent from "superagent";
import brewery from "../interfaces/brewery";

interface Props {}
interface State {
  breweries: brewery[];
}

export default class BeerBrands extends Component<Props, State> {
  state = {
    breweries: [],
  };
  async componentDidMount() {
    const fetchBreweries = await superagent.get(
      `http://localhost:4000/breweries`
    );
    const breweries: brewery[] = fetchBreweries.body.data;
    this.setState({ breweries: breweries });
    console.log("state", this.state.breweries);
  }
  render() {
    return <div>Waiting for the results.</div>;
  }
}
