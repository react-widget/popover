# popover

Popover组件

## 安装

`npm install --save react-widget-popover`


## 使用

[![Edit react-widget-popover](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-widget-popover-zkc6w?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from "react";
import Popover from "react-widget-popover";
import "react-widget-popover/style";
import "./styles.css";

export default function App() {
  return (
    <div
      className="App"
      style={{
        padding: 100
      }}
    >
      <Popover
        title="Title"
        content="Content"
      >
        <button>点击试试</button>
      </Popover>
    </div>
  );
}

```

### Interfaces

```ts
export interface PopoverProps extends TooltipProps {
    /** popover 标题 */
    title?: React.ReactNode | (() => React.ReactNode);
    /** popover 内容 */
    content?: React.ReactNode | (() => React.ReactNode);
}
```


### 基础样式

```css
.rw-popover-root {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}

.rw-popover {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    z-index: 2000;
}

.rw-popover-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.1;
    z-index: 2000;
}

.rw-popover-inner {
    position: relative;
    color: #fff;
    text-align: left;
    background-color: #FFF;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
    box-sizing: border-box;
}

.rw-popover-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    z-index: 1;
    box-sizing: border-box;
}

.rw-popover-title {
    min-width: 177px;
    min-height: 32px;
    margin: 0;
    padding: 5px 16px 4px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
}

.rw-popover-content {
    padding: 12px 16px;
    color: rgba(0, 0, 0, .65);
    box-sizing: border-box;
}

.rw-popover-placement-top>.rw-popover-arrow,
.rw-popover-placement-top-left>.rw-popover-arrow,
.rw-popover-placement-top-right>.rw-popover-arrow {
    bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #FFF;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, .07);
}

.rw-popover-placement-bottom>.rw-popover-arrow,
.rw-popover-placement-bottom-left>.rw-popover-arrow,
.rw-popover-placement-bottom-right>.rw-popover-arrow {
    top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #FFF;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, .06);
}

.rw-popover-placement-left>.rw-popover-arrow,
.rw-popover-placement-left-top>.rw-popover-arrow,
.rw-popover-placement-left-bottom>.rw-popover-arrow {
    right: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #FFF;
    box-shadow: 3px -3px 7px rgba(0, 0, 0, .07);
}

.rw-popover-placement-right>.rw-popover-arrow,
.rw-popover-placement-right-top>.rw-popover-arrow,
.rw-popover-placement-right-bottom>.rw-popover-arrow {
    left: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #FFF;
    box-shadow: -3px 3px 7px rgba(0, 0, 0, .07);
}

.rw-popover-placement-top-left>.rw-popover-arrow,
.rw-popover-placement-bottom-left>.rw-popover-arrow {
    left: 16px;
}

.rw-popover-placement-top>.rw-popover-arrow,
.rw-popover-placement-bottom>.rw-popover-arrow {
    left: 50%;
    margin-left: -5px;
}

.rw-popover-placement-top-right>.rw-popover-arrow,
.rw-popover-placement-bottom-right>.rw-popover-arrow {
    right: 16px;
}

.rw-popover-placement-left-top>.rw-popover-arrow,
.rw-popover-placement-right-top>.rw-popover-arrow {
    top: 8px;
}

.rw-popover-placement-left>.rw-popover-arrow,
.rw-popover-placement-right>.rw-popover-arrow {
    top: 50%;
    margin-top: -5px;
}

.rw-popover-placement-left-bottom>.rw-popover-arrow,
.rw-popover-placement-right-bottom>.rw-popover-arrow {
    bottom: 8px;
}

.rw-popover-animated {
    animation-duration: 0.2s;
}

.rw-popover-fade-in {
    animation-name: popoverFadeIn;
}

.rw-popover-fade-out {
    animation-name: popoverFadeOut;
}

.rw-popover-exit-done {
    opacity: 0;
}

@keyframes popoverFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes popoverFadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

```
