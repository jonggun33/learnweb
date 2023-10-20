import React from "react";

export default function SearchBar(props) {
  return (
    <>
      <div className="form-group">
        <select
          className="form-select"
          onChange={(e) => props.handleOnSearchChange(e.target.value)}
        >
          <option value="ALL">ALL</option>
          <option value="SOCIAL">SOCIAL</option>
          <option value="ECONOMY">ECONOMY</option>
          <option value="ENTERTAINMENT">ENTERTAINMENT</option>
        </select>
        <input
          type="text"
          className="form-control"
          id="search_bar"
          value={props.term}
          onChange={(e) => props.handleOnInputChange(e.target.value)}
        />
      </div>
    </>
  );
}
