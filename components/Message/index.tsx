import React from "react";
import styles from "./index.module.scss";
import { render } from "react-dom";

function createMessage(text: string, type: string) {
  const icons: any = {
    info: "icon-warning-fill",
    error: "icon-close-fill",
    success: "icon-check-fill",
  };
  let dom = document.createElement("div");
  dom.setAttribute("id", "message");
  document.body.appendChild(dom);
  const div = React.createElement(
    "div",
    { className: styles.message_content },
    <>
      <span className={`${styles.message_icon} ${styles[type]}`}>
        <i className={`iconfont ${icons[type]}`} />
      </span>
      <span>{text}</span>
    </>
  );
  render(div, dom);
  setTimeout(() => {
    dom!.remove();
  }, 3000);
}
function Message() {
  const types = ["success", "error", "info", "warn", "loading"];
  const message = {
    error: (text: string) => createMessage(text, "error"),
    info: (config: any) => createMessage(config, "info"),
    destroy: function () {
      console.log("destroy");
    },
  };
  return message;
}

export default Message();
