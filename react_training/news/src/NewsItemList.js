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
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.term != this.props.term){
    this.getTermSearchNews(this.props.term);
    }
    //prevPros: 
    //prevState: compare with previous state to prevent infinite loop

  }
  getTopHeadlines = () => {
    axios.get("http://localhost:3004/articles")
    .then(response => {
      console.log(response);
      this.setState({
        articles:response.data});
    })
  }
  getTermSearchNews = (term) => {
    axios.get(`http://localhost:3004/articles?q=${term}`)
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
