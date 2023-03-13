import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { render, unmountComponentAtNode } from "react-dom";
import { debounce } from "../../utils/index";
//第二个在第一个下面
const icons: { [key: string]: string } = {
  info: "icon-warning-fill",
  error: "icon-close-fill",
  success: "icon-check-fill",
  warn: "icon-warning-fill",
};

const Message = ({
  content,
  type = "info",
  onClose,
  duration,
  maxCount = 10,
}: any) => {
  const count =
    document.querySelector("#messageContainer")?.childNodes.length || 0;

  useEffect(() => {
    const closeTime = setTimeout(onClose, duration * 1000);
    return () => {
      closeTime && clearTimeout(closeTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {count <= maxCount && (
        <div
          className={styles.message_content}
          style={{ top: 15 + count * 50 + "px" }}
          onClick={onClose}
        >
          <span className={`${styles.message_icon} ${styles[type]}`}>
            <i className={`iconfont ${icons[type]}`} />
          </span>
          <span>{content}</span>
        </div>
      )}
    </>
  );
};

const getContainer = () => {
  const container = document.querySelector("#messageContainer");
  if (!container) {
    const _container = document.createElement("div");
    _container.setAttribute("id", "messageContainer");
    document.body.appendChild(_container);
    return _container;
  }
  return container;
};

const _message = (type: string, props: any) => {
  const container = getContainer();
  const _dom = document.createElement("div");
  container.appendChild(_dom);
  const handleClose = () => {
    unmountComponentAtNode(_dom);
    container.removeChild(_dom);
    container.remove();
  };
  if (typeof props === "string") {
    render(
      <Message
        type={type}
        content={props}
        onClose={debounce(handleClose, 500)}
      />,
      _dom
    );
  } else {
    render(
      <Message
        type={type}
        {...props}
        onClose={debounce(() => {
          handleClose();
          props.onClose();
        }, 500)}
      />,
      _dom
    );
  }
};

const success = (props: any) => _message("success", props);
const error = (props: any) => _message("error", props);
const info = (props: any) => _message("info", props);
const warn = (props: any) => _message("warn", props);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  success,
  error,
  info,
  warn,
};
