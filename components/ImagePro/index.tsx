import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

const env = process.env.NODE_ENV;

//注意：路径必须以/public/images 开头
const myLoader = ({
  src,
}: {
  src: string | StaticRequire | StaticImageData;
}) => {
  //生产环境：远程加载服务器时需要
  return `${process.env.HOST}${src}`;
};

export default function ImagePro({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      loader={env === "production" ? myLoader : undefined}
      src={src}
      alt={alt}
      {...props}
    />
  );
}
