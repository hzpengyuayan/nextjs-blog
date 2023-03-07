import styles from "./index.module.scss";
import Catelog from "@components/Catelog";

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const posts = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
  //const posts = await res.json();
  console.log(posts);

  // 据博文列表生成所有需要预渲染的路径
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  //获取所有ID
  return { paths, fallback: false };
}

//根据ID获取内容
export async function getStaticProps({ params }){
  const post = {
    title: "我的id是" + params.id,
  };
  //const post = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { post } };
}

export default function Detail(props) {
  console.log(props);
  return (
    <div className={styles.detail}>
      {/* 左侧文章区域 */}
      <div className={styles.article_area}>
        {props.post.title}
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
