import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Head from 'next/head';
import { useRouter } from "next/router";
import Layout from '../../components/layout'
type Post = {
  id: string;
};

function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>POSTS ID</title>
      </Head>
      Post:{post.id}
      <Link href="/">
       Back to home
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = [
    {
      id: "000",
    },
    {
      id: "001",
    },
    {
      id: "002",
    },
    {
      id: "1",
    },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = {
    id: "我是标题" + params?.id,
  };
  return { props: { post } };
};

export default Post;
