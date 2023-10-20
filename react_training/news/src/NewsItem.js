import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const article = {
      "author": null,
      "type": "IT",
      "typeCode": "IT",
      "description": "aaaa",
      "url": "https://n.news.naver.com/article/023/0003794431?cds=news_media_pc",
      "title": "asdafsd asdfasdfadf",
      "urlToImage": "https://imgnews.pstatic.net/image/023/2023/10/20/0003794431_001_20231020101201046.jpg?type=w647"
    }
    return (
      <>
        <li className="list_group-item">
          <div>
            <img src = {article.urlToImage} />
          </div>
      <h5>
      <a href = {article.url}> {article.title} </a>
      </h5>
      {article.description}
        </li>
      </>
    );
  }
}
