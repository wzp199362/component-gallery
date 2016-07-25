import React, {Component} from 'react';

export default class SlidePoint extends Component {
	constructor(props) {
		super(props);
	}

	handleDotclick(i) {
		var option = i - this.props.nowLocal;
		this.props.turn(option);
	}

	render() {
		let dotNodes = [];
		let {count} = this.props;
		for(var i=0; i<count; i++) {
			dotNodes[i] = (
				<span
				 key={'dot' + i}
				 className ={'slider-dot' + (i === this.props.nowLocal ? ' slider-dot-selected' : '')}
				 onClick = {this.handleDotclick.bind(this, i)}
				></span>
			);
		}

		return (
			<div className="slider-dots-wrap">
				{dotNodes}
			</div>
		)
	}
}