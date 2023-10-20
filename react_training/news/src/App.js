import React, { Component } from "react";
import NewsItemList from "./NewsItemList";
import SearchBar from "./SearchBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "", newsType: "" };
    this.handleOnInputChange = this.handleOnInputChange.bind(this);// binds .. to prevent setstate not a function error
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);
  }
  handleOnInputChange = (term) => {
    this.setState({ term: term });
  }
  handleOnSearchChange = (newsType) => {
    this.setState({ newsType: newsType });
  }

  render() {
    return (
      <>
        <SearchBar
          handleOnInputChange={this.handleOnInputChange}
          term={this.state.term}
        />
        <NewsItemList term={this.state.term} />
      </>
    );
  }
}
