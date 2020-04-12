import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./homepage.css";

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
        <Container>
          <Row className="justify-content-md-center">
            <Form onSubmit={this.handleSubmit} className="searchForm" inline>
              <Col>
                <Form.Label className="align">Find brands: </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="filterName"
                  placeholder="Search"
                  value={this.state.searchQuery}
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Button type="submit" variant="warning">
                  Search
                </Button>
              </Col>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
