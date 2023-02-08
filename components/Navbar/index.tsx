import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="博客LOGO" width={22} />
          博客
        </Link>

        <ul className={styles.navbar_list}>
          <li>输入框</li>
          <li>写文章</li>
        </ul>
      </div>
    </div>
  );
}
