import React, { Component } from "react";

interface Props {
  searchQuery: (keyword: string) => void;
}
interface State {}

export default class Search extends Component<Props, State> {
  state = {
    searchQuery: "",
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.searchQuery(this.state.searchQuery);
    // this.setState({ searchQuery: "", locationQuery: "" });
    event.preventDefault();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuery: event.target.value,
    });
    // console.log(this.state.searchQuery);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newFetch">Find brands: </label>
          <input
            type="text"
            name="filterName"
            className="searchBoxTitle"
            placeholder="Search"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="waves-effect waves-light btn apiSearch red lighten-2"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
