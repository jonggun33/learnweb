import React  from "react";

export default function NewsItem({ article }) {
  return (
    <>
      <li className="list_group-item">
        <div className="media">
          {article.urlToImage && (
            <img src={article.urlToImage} className="w-25 p-2" />
          )}
        </div>
        <div className="media-body p-2">
          <h5 className="mt-0">
            <a href={article.url}> {article.title} </a>
          </h5>
          {article.description}
        </div>
      </li>
    </>
  );
}
