/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 90,//默认静态生成超时时间为60秒。如果在超时内没有新页面生成完成，它将尝试再生成三次。如果第四次尝试失败，构建将失败。
}

module.exports = nextConfig
