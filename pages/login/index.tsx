import React from "react";

export default function Login() {
  const fn = async () => {
    let result = await fetch("http://47.99.97.156:8886/users/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "wangwu",
        pwd: "123456",
      }),
    });
    let res = await result.json(); //必须通过此方法才可返回数据
    console.log(res);
  };
  return (
    <div>
      Login
      <button onClick={fn}>登录</button>
    </div>
  );
}
