import React, { useState, useEffect } from "react";
import NewsItemList from "./NewsItemList";
import SearchBar from "./SearchBar";

export default function App() {
  const [term, setTerm] = useState("");
  const [newsType, setNewsType] = useState("");

  const handleOnInputChange = (term) => {
    setTerm(term);
  };
  const handleOnSearchChange = (newsType) => {
    setNewsType(newsType);
  };
  return (
    <>
      <SearchBar handleOnInputChange={handleOnInputChange} term={term} />
      <NewsItemList term={term} />
    </>
  );
}
