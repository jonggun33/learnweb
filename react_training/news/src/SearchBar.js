import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <>
      <div className = "form-group">
        <select className = "form-select" onChange= {(e) => this.handleOnSearchChange(e.target.value)}>
          <option value= "ALL">ALL</option>
          <option value= "SOCIAL">SOCIAL</option>
          <option value= "ECONOMY">ECONOMY</option>
          <option value= "ENTERTAINMENT">ENTERTAINMENT</option>
        </select>
      <input
        type = "text" className = "form-control"  id = "search_bar" value = {this.props.term} 
        onChange={(e) => this.props.handleOnInputChange(e.target.value)}
      />
      </div>
      </>
    );
  }
}
