/*
 * @Description-en:mock intercepts the request and simulates the returned data
 * @Description-zh:mock 拦截请求并模拟返回数据
 * @Author: CodeGetters
 * @version:
 * @Date: 2023-06-24 17:11:59
 * @LastEditors: CodeGetters
 * @LastEditTime: 2023-07-16 22:05:46
 */
import Mock from "mockjs";

let BaseURL = import.meta.env.VITE_BASE_URL;

// 如果是生产环境取消模拟数据
if (import.meta.env.MODE === "production") {
  BaseURL = "";
}

Mock.mock(BaseURL + "/", "get", {
  status: 200,
  data: "Mock successful!",
});

Mock.mock(BaseURL + "/router", "get", {
  status: 200,
  data: {
    name: "@cname",
    info: "Mock successful!",
  },
  // data: "Mock successful!",
});

// 登录
Mock.mock(BaseURL + "/user/login", "post", {
  status: 200,
  data: {
    token: "@string",
    userInfo: {
      id: "@natural",
      userName: "{% mock 'name'+ 'natural' %}",
      authority: 2,
      role: "普通用户",
      sex: "@string",
    },
  },
  msg: "登录成功！",
});

Mock.mock(BaseURL + "/user/login", "post", {
  status: 200,
  data: {
    token: "@string",
    userInfo: {
      id: "@natural",
      userName: "{% mock 'name'+ 'natural' %}",
      authority: 2,
      role: "普通用户",
      sex: "@string",
    },
  },
  msg: "登录成功！",
});
