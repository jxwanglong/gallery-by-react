require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageURL (imageDatasArr) {
	for (let i = 0, j = imageDatasArr.length; i < j; i++) {
		let arr = imageDatasArr[i];
		arr.imageURL = require('../images/' + arr.fileName);
		imageDatasArr[i] = arr;
	}
	return imageDatasArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className='stage'>
      	<section className='img-sec'>
      	</section>
      	<nav className='controller-nav'>
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
