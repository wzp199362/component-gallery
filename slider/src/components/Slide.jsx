import React, {Component} from 'react';

require('../styles/Slide.scss');

import SlideDirection from './slide/SlideDirection';
import SlideItem from './slide/SlideItem';
import SlidePoint from './slide/SlidePoint';

export default class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nowLocal: 0
		};
	}

	turn(n){
		var _n = this.state.nowLocal + n;
		if(_n < 0){
			_n = _n + this.props.items.length;
		}
		if(_n > (this.props.items.length - 1)){
			_n = _n - this.props.items.length;
		}
		this.setState({nowLocal:_n});
	}

	goPlay(){
		if(this.props.autoplay){
			this.autoplayFlag = setInterval(() =>{
				this.turn(1)
			},this.props.delay * 1000);
		}
	}

	pausePlay(){
		clearInterval(this.autoplayFlag);
	}

	componentDidMount(){
		this.goPlay();
	}

	render() {
		let count = this.props.items.length;
		let itemsNodes = this.props.items.map((item , idx) => {
			return <SlideItem item = {item} count = {count} key = {'items' +idx} />
		});

		let arrowNodes = <SlideDirection turn = {this.turn.bind(this)} />;
		let dotNodes = <SlidePoint turn = {this.turn.bind(this)} count = {count} nowLocal = {this.state.nowLocal} />;

		return (
			<div
				className = "slider"
				onMouseOver={this.props.pause?this.pausePlay.bind(this):null}
				onMouseOut= {this.props.pause?this.goPlay.bind(this):null}>
				<ul style = {{
					left: -100 * this.state.nowLocal + '%',
					transitionDuration: this.props.speed +'s',
					width: this.props.items.length * 100 + '%'
				}}>
					{itemsNodes}
				</ul>
				{this.props.arrows?arrowNodes:null}
				{this.props.dots?dotNodes:null}
			</div>
		);
	}
}

Slide.defaultProps = {
	speed : 1,
	delay : 2,
	pause : true,
	autoplay : true,
	dots : true,
	arrows : true,
	items : []
};
Slide.autoplayFlag = null;