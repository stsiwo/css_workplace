import React from 'react';
import styles from './gridLayout.css';

class GridLayout extends React.Component {
  render() {
    return (
      <div className={ styles.gridContainer }>
        <div id={ styles.node1 } className={ styles.node }>node 1</div>
        <div id={ styles.node2 } className={ styles.node }>node 2</div>
        <div id={ styles.node3 } className={ styles.node }>node 3</div>
        <div id={ styles.node4 } className={ styles.node }>node 4</div>
        <div id={ styles.node5 } className={ styles.node }>node 5</div>
        <div id={ styles.node6 } className={ styles.node }>node 6</div>
      </div>
     ); 
  }
}

export default GridLayout;

