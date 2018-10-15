import React from 'react';
import searchIconSvg from './searchIcon.svg';
import searchIconPng from './searchIcon.png';
import styles from './searchBox.css';

class SearchBox extends React.Component {
  render() {
    return (
      <div className={ styles.searchBox }>
        <input type="text" className={ styles.searchInput } placeholder="search keys ..."/>
        <img className={ styles.searchIcon } src={searchIconSvg} />
      </div>
     ); 
  }
}

export default SearchBox;
