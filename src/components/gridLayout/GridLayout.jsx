import React from 'react';
import styles from './gridLayout.css';
import items from './itemFactory';


class GridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }
  renderItems(items) {
    return items.map( (item) =>  
      <div key={ item.id } className={ styles.node }>
        <img src={item.img} className={ styles.img } /> 
      </div>
    );
  }
  render() {
    return (
      <div className={ styles.gridContainer }>
        { this.renderItems(items) }
      </div>
     ); 
  }
}

export default GridLayout;

