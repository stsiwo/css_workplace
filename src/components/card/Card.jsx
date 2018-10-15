import React from 'react';
import styles from './card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.cardContainer }>
          <div className={ styles.upperText }><span>title</span></div>
          <div className={ styles.lowerText }>
            <div className={ styles.detail1 }><span>detail 1</span></div>
            <div className={ styles.detail2 }><span>detail 2</span></div>
            <div className={ styles.detail3 }><span>detail 3</span></div>
          </div>
        </div>
      </div>  
     ); 
  }
}

export default Card;

