// import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  console.log('HOME');
  
  return (
    <div className={styles.home_context}>
      {/* 左侧列表区域 */}
      <div className={styles.entry_list}>
        <div className={styles.header}>
          <ul className={styles.nav_list}>
            <li className={`${styles.nav_item} ${styles.active}`}>
              <a href="#">Js</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">Vue</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">React</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">Webpack</a>
            </li>
          </ul>
        </div>
        <div className={styles.list_wrap}>
          <div className={styles.entry}>
            <div className={styles.meta_container}>2023/2/8</div>
            <div className={styles.content_wrapper}>
              <div className={styles.content_main}>
                <div className={styles.title}>为什么选 Vite</div>
                <div className={styles.abstract}>
                  在浏览器支持 ES 模块之前，JavaScript
                  并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对
                  “打包”
                  这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。
                </div>
                <ul className={styles.action_list}>
                  <li>
                    <i className="iconfont icon-yanjing" />
                    <span>123</span>
                  </li>
                  <li>
                    <i className="iconfont icon-dianzan" />
                    <span>123</span>
                  </li>
                  <li>
                    <i className="iconfont icon-pinglun-" />
                    <span>123</span>
                  </li>
                </ul>
              </div>
              {/* <Image
                src="/public/images/baidu_test.png"
                alt="Picture of the author"
                width={120}
                height={80}
              ></Image> */}
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.meta_container}>2023/2/8</div>
            <div className={styles.content_wrapper}>
              <div className={styles.content_main}>
                <div className={styles.title}>为什么选 Vite</div>
                <div className={styles.abstract}>
                  在浏览器支持 ES 模块之前，JavaScript
                  并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对
                  “打包”
                  这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。
                </div>
                <ul className={styles.action_list}>
                  <li>
                    <i className="iconfont icon-yanjing" />
                    <span>123</span>
                  </li>
                  <li>
                    <i className="iconfont icon-dianzan" />
                    <span>123</span>
                  </li>
                  <li>
                    <i className="iconfont icon-pinglun-" />
                    <span>123</span>
                  </li>
                </ul>
              </div>
              {/* <Image
                src="/public/images/baidu_test.png"
                alt="Picture of the author"
                width={120}
                height={80}
              ></Image> */}
            </div>
          </div>
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
