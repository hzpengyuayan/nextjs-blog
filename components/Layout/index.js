import Head from "next/head";
import styles from "./index.module.scss";

import Navbar from "../Navbar";

export const siteTitle = "Blog By Zcy";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="记录一个普通前端程序员的每日成长！" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      {/* 顶部导航栏 */}
      <Navbar></Navbar>
      <main className={styles.container_main}>{children}</main>
    </div>
  );
}
