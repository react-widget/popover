import React, { Component } from "react";
import Popover from "../../src";

function PopoverButton({ text, ...props }) {
	return (
		<Popover title="Title" content="...Content..." {...props}>
			<button>{text || props.placement}</button>
		</Popover>
	);
}

export default class DEMO extends Component {
	state = {
		visible: true,
	};

	componentDidMount() {}

	render() {
		return (
			<div>
				<PopoverButton placement="bottomLeft" className="test-pop" />
				<PopoverButton placement="bottom" />
				<PopoverButton placement="bottomRight" />
				<p />
				<PopoverButton placement="topLeft" />
				<PopoverButton placement="top" />
				<PopoverButton placement="topRight" />
				<p />
				<PopoverButton placement="leftTop" />
				<p />
				<PopoverButton placement="left" />
				<p />
				<PopoverButton placement="leftBottom" />
				<p />
				<PopoverButton placement="rightTop" />
				<p />
				<PopoverButton placement="right" defaultVisible />
				<p />
				<PopoverButton placement="rightBottom" />
			</div>
		);
	}
}
