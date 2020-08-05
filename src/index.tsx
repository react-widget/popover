import React from "react";
import Tooltip, { TooltipProps } from "react-widget-tooltip";

export const version = "%VERSION%";
export interface PopoverProps extends TooltipProps {
	/** popover 标题 */
	title?: React.ReactNode | (() => React.ReactNode);
	/** popover 内容 */
	content?: React.ReactNode | (() => React.ReactNode);
}

export interface PopoverState {}

export class Popover extends React.Component<PopoverProps, PopoverState> {
	static defaultProps: PopoverProps = {
		prefixCls: "rw-popover",
		placement: "top",
		trigger: "click",
		role: "popover",
	};

	isEmptyTitle(title: React.ReactNode) {
		return title === "" || title == null || title === false;
	}

	getContent = () => {
		const { prefixCls, title, content } = this.props;

		const titleNode: React.ReactNode = typeof title === "function" ? title() : title;

		return (
			<>
				{this.isEmptyTitle(titleNode) ? null : (
					<div className={`${prefixCls}-title`}>{titleNode}</div>
				)}
				<div className={`${prefixCls}-content`}>
					{typeof content === "function" ? content() : content}
				</div>
			</>
		);
	};

	render() {
		const { content, title, ...restProps } = this.props;

		return <Tooltip {...restProps} title={this.getContent()} />;
	}
}

export default Popover;
