import React from "react";
import styles from "./index.module.scss";
import { render } from "react-dom";

function createMessage(text: string) {
  let dom = document.createElement("div");
  dom.setAttribute("id", "message");
  document.body.appendChild(dom);
  const div = React.createElement(
    "div",
    { className: styles.message_content },
    <>
      <span className={styles.message_icon}>
        <i className="iconfont icon-close-circle" />
      </span>
      <span>This is a</span>
    </>
  );
  render(div, dom);
  setTimeout(() => {
    dom!.remove();
  }, 5000);
}
function Message() {
  const types = ["success", "error", "info", "warn", "loading"];
  const message = {
    error: function (text: string) {
      createMessage(text);
      //里面渲染进行二次封装
    },
    info: function (text: string) {
      console.log(text);
    },
    destroy: function () {
      console.log("destroy");
    },
  };
  return message;
}
//链式调用 利用对象,缺点,每个都要写
//继续用参数

export default Message();
