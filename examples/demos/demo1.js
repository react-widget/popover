import React, { Component } from "react";
import Popover from "../../src";

const animateClassNames = {
	appear: "animated",
	appearActive: "fadeBottomIn",
	enter: "animated",
	enterActive: "fadeBottomIn",
	enterDone: "",
	exit: "animated",
	exitActive: "fadeBottomOut",
	exitDone: "",
};

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
				<PopoverButton placement="bottomLeft" />
				<PopoverButton placement="bottom" />
				<PopoverButton placement="bottomRight" />
				<hr />
				<PopoverButton placement="topLeft" />
				<PopoverButton placement="top" />
				<PopoverButton placement="topRight" />
				<hr />
				<PopoverButton placement="leftTop" />
				<br />
				<PopoverButton placement="left" />
				<br />
				<PopoverButton placement="leftBottom" />
				<hr />
				<PopoverButton placement="rightTop" />
				<br />
				<PopoverButton placement="right" defaultVisible />
				<br />
				<PopoverButton placement="rightBottom" />
			</div>
		);
	}
}
