import { useState } from "react";
import { login } from "@services/users";
import ImagePro from "@components/ImagePro";
import Link from "next/link";
import Login from "/public/images/login.png";
import logo from "/public/images/logo.png";
import styles from "./index.module.scss";

type Link = {
  href: string;
  text: string;
};
const Links: Link[] = [
  {
    href: "/",
    text: "首页",
  },
  {
    href: "/editWebsite",
    text: "插件",
  },
];

type Login = {
  username: string;
  password: string;
};

export default function Navbar() {
  const [curLinkIndex, setCurLinkIndex] = useState<number>(0);
  const [isShowList, setIsShowList] = useState<boolean>(false); //是否展示管理文章内的下拉列表
  const [isShowLogin, setIsShowLogin] = useState<boolean>(false); //是否展示登录框
  const [loginInfo, setLoginInfo] = useState<Login>({
    username: "zhangsan",
    password: "123456",
  }); //登录信息

  const handleLogin = async (type = "normal") => {
    //console.log(loginInfo, type);
    const res = await login(loginInfo);
   // console.log(res);
  };

  const handleRegister = () => {};

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link href="/" className={styles.logo}>
          <ImagePro src={logo} alt="博客LOGO" width={22} height={22}></ImagePro>
          博客
        </Link>
        {/* 链接列表区域 */}
        <ul className={styles.navbar_links}>
          {Links.map((item: Link, index: number) => {
            return (
              <li
                key={item.text}
                className={`${
                  curLinkIndex === index && styles.navbar_links_active
                }`}
                onClick={() => setCurLinkIndex(index)}
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            );
          })}
        </ul>

        {/* 总体区域 */}
        <ul className={styles.navbar_list}>
          {/* 搜索区域 */}
          <li className={styles.search}>
            <input type="text" placeholder="搜索全站" />
            <span className={styles.search_btn}>
              <i className="iconfont icon-sousuo"></i>
            </span>
          </li>
          {/* 搜索-下拉列表区域 */}
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
                <li>
                  <i className="iconfont icon-beizhuyitianxie" />
                  写文章
                </li>
                <li>
                  <i className="iconfont icon-caogaoxiang" />
                  草稿箱
                </li>
              </ul>
            )}
          </li>
          {/* 登录区域 */}
          <li className={styles.personal}>
            {/* 未登录 */}
            <button
              className={styles.login_btn}
              onClick={() => setIsShowLogin(true)}
            >
              登录 | 注册
            </button>
            {/* 已登录 */}
            <div className={styles.unlogin}>
              {/* 消息提示区域 */}
              <div></div>
              {/* 头像展示区域 */}
              <div></div>
            </div>
          </li>
        </ul>
      </div>

      {isShowLogin && (
        <div className={styles.login_container}>
          <i
            className="iconfont icon-chacha"
            onClick={() => setIsShowLogin(false)}
          />
          <div className={styles.login_bgc}>
            <ImagePro src={Login} alt="登录" width={298}></ImagePro>
          </div>
          <div className={styles.login_form}>
            <div className={styles.login_title}>Welcome to BLOG System</div>
            <div className={styles.login_warn}>
              <span>首次登录？</span>
              <span
                onClick={handleRegister}
                className={styles.login_to_register}
              >
                点击注册
              </span>
            </div>
            <div className={styles.login_area}>
              {/* 登录区域 */}
              <div className={styles.form_item}>
                账号
                <input
                  type="text"
                  value={loginInfo.username}
                  onChange={(e) => {
                    setLoginInfo({
                      ...loginInfo,
                      username: e.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.form_item}>
                密码
                <input
                  type="password"
                  value={loginInfo.password}
                  onChange={(e) => {
                    setLoginInfo({
                      ...loginInfo,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.form_item}>
                <span>忘记密码?</span>
              </div>
              <div className={styles.form_item}>
                <button
                  className={styles.form_item_btn}
                  onClick={() => handleLogin()}
                >
                  登 录
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
