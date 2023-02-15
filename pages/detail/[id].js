import styles from "./index.module.scss";
import Catelog from "@components/Catelog";

export default function Detail() {
  return (
    <div className={styles.detail}>
      {/* 左侧文章区域 */}
      <div className={styles.article_area}>
        
      </div>
      {/* 右侧信息区域 */}
      <div className={styles.sidebar}>
        <Catelog title="相关文章">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </Catelog>
      </div>
    </div>
  );
}
