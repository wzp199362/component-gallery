
import React from 'react';
import Slide from './Slide';

const IMAGE_DATA = [
		{
			src: require('../images/sliderImage/slide1.jpg'),
			alt: 'images-1'
		},
		{
			src: require('../images/sliderImage/slide2.jpg'),
			alt: 'images-2'
		},
		{
			src: require('../images/sliderImage/slide3.jpg'),
			alt: 'images-3'
		},
		{
			src: require('../images/sliderImage/slide1.jpg'),
			alt: 'images-4'
		},
		{
			src: require('../images/sliderImage/slide2.jpg'),
			alt: 'images-5'
		},
		{
			src: require('../images/sliderImage/slide3.jpg'),
			alt: 'images-6'
		}
	];

class AppComponent extends React.Component {
	render() {
		return(
			<Slide
				items={IMAGE_DATA}
				speed={1.2}
				delay={2.1}
				pause={true}
				autoplay={true}
				dots={true}
				arrows={true}
			/>
		)
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
