import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export default function NewsItemList({ term }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopHeadlines();
  }, []);
  useEffect(() => {
    getTermSearchNews(term);
  }, [term]);
  const getTopHeadlines = () => {
    axios.get("http://localhost:3004/articles").then((response) => {
      console.log(response);
      setArticles(response.data);
    });
  };
  const getTermSearchNews = (term) => {
    axios.get(`http://localhost:3004/articles?q=${term}`).then((response) => {
      console.log(response);
      setArticles(response.data);
    });
  };

  return (
    <>
      {articles.map((article) => (
        <NewsItem article={article} key={article.url} />
      ))}
    </>
  );
}
