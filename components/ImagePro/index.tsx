import React from "react";
import Image from "next/image";

const env = process.env.NODE_ENV;

//注意：路径必须以/public/images 开头
const myLoader = ({ src }: any) => {
  //生产环境：远程加载服务器时需要
  return `${process.env.HOST}${src}`;
};

export default function ImagePro(props: any) {
  return (
    <Image
      loader={env === "production" && myLoader}
      src={props.src}
      alt={props.alt}
      {...props}
    />
  );
}
