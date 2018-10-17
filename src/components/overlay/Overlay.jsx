import React from 'react';
import styles from './overlay.css';

class Overlay extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.overlayTop }></div>
        <div className={ styles.overlayBottom }></div>
        <div className={ styles.overlayLeft }></div>
        <div className={ styles.overlayRight }></div>
        <div className={ styles.overlayContent }>
          <h2>Title</h2>
          <p className={ styles.detail } >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onl...       
          </p>
          <div className={ styles.footer } >footer here...</div>
        </div> 
        <div className={ styles.content }></div> 
      </div>
     ); 
  }
}

export default Overlay;

