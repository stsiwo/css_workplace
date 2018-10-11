import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import xmlData from './data.xml';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  console.log(xmlData);

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
