import React, {Component} from 'react';

export default class SlideDirection extends Component {
	constructor(props) {
		super(props);
	}

	handleArrowClik(option) {
		this.props.turn(option);
	}

	render() {
		return(
			<div>
				<span className="slider-arrow slider-arrow-left"
				onClick={this.handleArrowClik.bind(this, -1)}>
				 &lt;
				</span>
				<span className="slider-arrow slider-arrow-right"
				onClick={this.handleArrowClik.bind(this, 1)}>
				 &gt;
				</span>
			</div>
		)
	}
}