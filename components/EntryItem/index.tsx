import { useRouter } from "next/router";
import styles from "./index.module.scss";

export default function EntryItem() {
  const router = useRouter();
  //点击跳转
  const clickEntryItem = () => {
    router.push('/detail/'+1)
  };
  return (
    <div className={styles.entry} onClick={clickEntryItem}>
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
  );
}
