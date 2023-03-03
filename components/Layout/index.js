import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

import Navbar from "../Navbar";

export const siteTitle = "Blog By Zcy";

export default function Layout({ children }) {
  const router = useRouter();
  const isFull =
    router.pathname === "/editWebsite" && router.query.fullScreen === "true";
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* 顶部导航栏 */}
      {!isFull && <Navbar />}
      <main
        className={`${styles.container_main} ${
          isFull && styles.container_full
        }`}
      >
        {children}
      </main>
    </div>
  );
}
