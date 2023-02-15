import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import styles from "./index.module.scss";

export default function Navbar() {
  const [isShowList, setIsShowList] = useState<boolean>(false); //是否展示管理文章内的下拉列表
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="博客LOGO" width={22} />
          博客
        </Link>

        <ul className={styles.navbar_list}>
          <li className={styles.search}>
            <input type="text" placeholder="搜索全站" />
            <span className={styles.search_btn}>
              <i className="iconfont icon-sousuo"></i>
            </span>
          </li>
          <li className={styles.manage_articles}>
            <span className={styles.manage_action}>管理文章</span>
            <span
              className={styles.more}
              onClick={() => setIsShowList(!isShowList)}
            >
              <i className="iconfont icon-sanjiaodown"></i>
            </span>
            {isShowList && (
              <ul className={styles.more_list}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
