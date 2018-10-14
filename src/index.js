import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

// need to place to put html 
// option 1: cast out html webpack plugin and insert html manually
// option 2: insert html element with native js
// option 3: insert html element with react -> best for future reference.

// icon needs fonts awesome
// <div class="search-box">
//     	<input type="text" placeholder="placeholder..." class="search-input">
//         <i class="search-icon fas fa-search fa-2x"></i>
// </div>

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
