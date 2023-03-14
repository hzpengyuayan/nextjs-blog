import React from "react";
import axios from "axios";
import qs from "qs";
import message from "@components/Message";

import { BASE_URL } from "./baseUrl.js";
import { getToken } from "./auth";

const Request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

Request.interceptors.request.use(
  function (config) {
    const token = getToken() || ""; //TODO TOKEN的获取 cookie|localstorage 添加login https://juejin.cn/post/7076283302402850823
    if (token && token.length > 0) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error); //TODO 请求错误的返回信息
  }
);

Request.interceptors.response.use(
  function (response) {
    const { data, status } = response;
    if (status === 200 && data.code === 200) return data;
  },
  function (error) {
    if (error && error.response) {
      //message.destroy();
      switch (
        error.response.status //TODO 对于状态码的处理
      ) {
        case 400:
          message.error("请求错误");
          break;
        case 401:
          message.info({
            content: "登录过期，请重新登录",
            type: "info",
            duration: 3,
            onClose: () => {
              // TODO 重定向处理 添加unlogin
              // cookie.remove('userInfo');
              window.location.href = "/";
            },
          });
          break;
        case 403:
          message.info("拒绝访问");
          break;
        case 404:
          message.info("请求错误，未找到资源");
          break;
        case 405:
          message.info("请求方法未允许");
          break;
        case 408:
          message.info("请求超时");
          break;
        case 500:
          message.info("服务端出错");
          break;
        case 501:
          message.info("网络未实现");
          break;
        case 502:
          message.info("网络错误");
          break;
        case 503:
          message.info("服务不可用");
          break;
        case 504:
          message.info("网络超时");
          break;
        case 505:
          message.info("http版本不支持该请求");
          break;
        default:
          message.info(`连接错误${error.response.status}`);
      }
    }
  }
);

//get
export const get = (api, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    Request.get(api, { params, headers })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//post
export const _post = (api, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    Request.post(api, data, { headers })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const post = (api, data, headers = {}) => {
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  return _post(api, qs.stringify(data), headers);
};

export const postJson = (api, data, headers = {}) => {
  headers["Content-Type"] = "application/json;charset=utf-8";
  return _post(api, JSON.stringify(data), headers);
};

export const postFormData = (api, data, headers = {}) => {
  headers["Content-Type"] = "multipart/form-data";
  return _post(api, data, headers);
};
