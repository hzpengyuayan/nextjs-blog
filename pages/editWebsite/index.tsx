import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styles from "./index.module.scss";

export default function EditWebsite() {
  const router = useRouter();
  const [isFull, setIsFull] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [style, setStyle] = useState({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
  });
  const mousePosition = useRef({
    mouseX: 0, //鼠标距离盒子左侧的距离
    mouseY: 0, //鼠标距离盒子上侧的距离
  });
  const isDown = useRef(false);
  const isOnly = useRef(false);

  const [boxList, setBoxList] = useState<any>([
    // {
    //   key: "11",
    //   type: "div",
    //   style: {
    //     left: 100,
    //     top: 100,
    //     width: 100,
    //     height: 100,
    //   },
    //   status: "", //
    // },
  ]);

  const onMouseDown = (e:any) => {
    e.stopPropagation();
    if (isDown.current) return;
    console.log("onMouseDown");

    isDown.current = true;
    mousePosition.current = {
      mouseX: e.clientX - e.target.offsetTop,
      mouseY: e.clienty - e.target.offsetLeft,
    };

    // const top = e.target.offsetTop;
    // const left = e.target.offsetLeft;
    // // 然后鼠标坐标是
    // const cY = e.clientY; // clientX 相对于可视化区域
    // const cX = e.clientX;
    // mousePosition.current = {
    //   top,
    //   left,
    //   cX,
    //   cY,
    // };
  };

  const onDrag = (e:any) => {
    console.log("onDrag");
    console.log(e);
    if (!isDown.current) {
      isDown.current = true;
      console.log(e);

      mousePosition.current = {
        mouseX: e.clientY - e.target.offsetTop,
        mouseY: e.clientY - e.target.offsetTop,
      };
    }

    // if (!isDown.current) return;
    // const top =
    //   mousePosition.current.top + (e.clientY - mousePosition.current.cY);
    // const left =
    //   mousePosition.current.left + (e.clientX - mousePosition.current.cX);

    let newBoxList = boxList.slice();
    const style = { ...newBoxList[newBoxList.length - 1].style };
    style.top = style.top + e.clientY - mousePosition.current.mouseY;
    style.left = style.left + e.clientX - mousePosition.current.mouseX;
    newBoxList[newBoxList.length - 1].style = style;
    setBoxList(newBoxList);
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const createElement = (type: string) => {
    setIsDraw(true);
    // ReactDOM.render(
    //   React.createElement(
    //     "div",
    //     {
    //       className: "common_div",
    //       draggable: true,
    //       style: style,
    //       onClick: onMouseDown,
    //       onMouseMove: onMouseMove,
    //     },
    //     "new div"
    //   ),
    //   document.getElementById("editWebsite")
    // );
  };

  const upload = () => {
    //https://juejin.cn/post/7101981953213071373
    // 生成html字符串
    const html = gethtml(document.getElementById("editWebsite")?.innerHTML);
    // // 创建一个a标签
    var a = document.createElement("a");
    // 创建一个包含blob对象的url
    var url = window.URL.createObjectURL(
      new Blob([html], {
        type: "",
      })
    );
    a.href = url;
    a.download = "file.html";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const gethtml = (context: any) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
        <style>
            .common_div{
                border: 1px solid #ccc;
                position: absolute;
                cursor: move;
            }
        </style>
        <div id='editWebsite'>${context}</div>
    </html>
    `;
    return html;
  };

  //切换是否全屏操作
  const handleIsFull = () => {
    setIsFull(!isFull);
    router.push("/editWebsite?fullScreen=" + !isFull);
  };

  const boxPosition = useRef({
    left: 0,
    top: 0,
  });
  const startDraw = (e:any) => {
    e.stopPropagation();
    if (isDraw) {
      boxPosition.current = {
        left: e.clientX,
        top: e.clientY,
      };
      setIsDraw(false);
      setIsMove(true);
    }
  };

  const onDraw = (e:any) => {
    e.stopPropagation();
    if (!isDraw && isMove) {
      if (isOnly.current === false) {
        isOnly.current = true;
        setBoxList([
          ...boxList,
          {
            key: boxList.length,
            type: "div",
            style: {
              ...boxPosition.current,
              width: 0,
              height: 0,
              border: "1px dotted #000",
            },
          },
        ]);
      } else {
        let newBoxList = boxList.slice();
        const style = { ...newBoxList[newBoxList.length - 1].style };
        style.width = Math.abs(e.clientX - style.left);
        style.height = Math.abs(e.clientY - style.top);
        newBoxList[newBoxList.length - 1].style = style;
        setBoxList(newBoxList);
      }
    }
  };
  const endDraw = () => {
    if (!isDraw && isMove) {
      let newBoxList = boxList.slice();
      const style = { ...newBoxList[newBoxList.length - 1].style };
      style.border = "1px solid #000";
      newBoxList[newBoxList.length - 1].style = style;
      setBoxList(newBoxList);
      setIsMove(false);
      isOnly.current = false;
    }
  };

  return (
    <div
      className={`${styles.edit_website} ${isDraw && "draw"}`}
      onMouseDown={startDraw}
      onMouseMove={onDraw}
      onMouseUp={endDraw}
    >
      <button onClick={handleIsFull}>{isFull ? "缩小显示" : "全屏显示"}</button>
      <button onClick={() => createElement("div")}>生成div</button>
      <button onClick={upload}>导出静态html</button>
      <div id="editWebsite">
        {boxList.map((item: any) => {
          return (
            <div
              key={item.key}
              className="common_div"
              draggable={true}
              style={item.style}
              // onMouseDown={onMouseDown}
              onDrag={onDrag}
              // onMouseUp={onMouseUp}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
