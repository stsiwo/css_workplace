import React from 'react';
import styles from './card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.cardContainer }>
          <div className={ styles.upperText }>title</div>
          <div className={ styles.lowerText }>
            <div className={ styles.detail }>detail 1</div>
            <div className={ styles.detail }>detail 2</div>
            <div className={ styles.detail }>detail 3</div>
          </div>
        </div>
      </div>  
     ); 
  }
}

export default Card;

