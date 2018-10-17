import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import SearchBox from './components/searchBox/SearchBox';
import Overlay from './components/overlay/Overlay';

// need to place to put html 
// option 1: cast out html webpack plugin and insert html manually
// option 2: insert html element with native js
// option 3: insert html element with react -> best for future reference.

// icon needs fonts awesome
// <div class="search-box">
//     	<input type="text" placeholder="placeholder..." class="search-input">
//         <i class="search-icon fas fa-search fa-2x"></i>
// </div>


ReactDOM.render(<Overlay />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
