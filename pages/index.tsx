// import Image from "next/image";
import styles from "./index.module.scss";
import EntryItem from "@components/EntryItem";

type navItem = {
  text: string;
};
const NAVLIST: navItem[] = [
  {
    text: "Js",
  },
  {
    text: "Vue",
  },
  {
    text: "React",
  },
  {
    text: "Webpack",
  },
];

export default function Home() {
  console.log("HOME" + process.env.NODE_ENV +111);

  return (
    <div className={styles.home_context}>
      {/* 左侧列表区域 */}
      <div className={styles.entry_list}>
        <div className={styles.header}>
          <ul className={styles.nav_list}>
            {NAVLIST.map((item: navItem) => (
              <li
                key={item.text}
                className={`${styles.nav_item} ${styles.active}`}
              >
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_wrap}>
          <EntryItem></EntryItem>
          <EntryItem></EntryItem>
          <EntryItem></EntryItem>
          <EntryItem></EntryItem>
        </div>
      </div>
      {/* 右侧信息区域 */}
      <aside className={styles.sidebar}>
        {/* 右侧信息-顶部提示区域 */}
        <div className={styles.sidebar_tip}>
          <div className={styles.icon_text}>
            <span className={styles.title}>下午好！</span>
            <span className={styles.desc}>每天进步一点点！</span>
          </div>
          <button className={styles.record_btn}>签到</button>
        </div>
        {/* 右侧信息-个人信息区域 */}
        <div className={styles.sidebar_user}>
          <div className={styles.avatar}></div>
          <div className={styles.name}>普通人</div>
          <div className={styles.desc}>Ordinary but not ordinary.</div>
          <div className={styles.link}>
            <i className={styles.link_icon + " iconfont icon-github"} />
            <i
              className={styles.link_icon + " iconfont icon-gitee-fill-round"}
            />
          </div>
          <div className={styles.skill}>123</div>
        </div>
        {/* 右侧信息-目录区域 */}
        <div className={styles.sidebar_catelog}>
          <div className={styles.title}>目录</div>
          <div className={styles.body}>
            <ul className={styles.list}>
              <li className={`${styles.a_container} ${styles.active}`}>
                <a href="#">1.</a>
              </li>
              <li className={styles.a_container}>
                <a href="#">2.</a>
              </li>
              <li className={styles.a_container}>
                <a href="#">3.</a>
              </li>
              <li className={styles.a_container}>
                <a href="#">4.</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
