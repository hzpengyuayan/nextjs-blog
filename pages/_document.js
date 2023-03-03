import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
       <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="记录一个普通前端程序员的每日成长！" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
