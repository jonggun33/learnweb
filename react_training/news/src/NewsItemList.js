import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export default class NewsItemList extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles : [],
    }
  }
  componentDidMount() {
    this.getTopHeadlines();
  }
  getTopHeadlines = () => {
    axios.get("http://localhost:3004/articles")
    .then(response => {
      console.log(response);
      this.setState({
        articles:response.data});
    })
  }
  render() {
    return (
      <>
        {this.state.articles.map((article) => (
          <NewsItem article={article} key={article.url} />
        ))}
      </>
    );
  }
}
