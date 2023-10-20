import React, {Component} from 'react';
import NewsItem from './NewsItem';
import NewsItemList from './NewsItemList';
import SearchBar from './SearchBar';


export default class App extends Component{
  render(){
    return(
      <>
      <SearchBar />
      <NewsItemList />
      </>
    );
  }
}
