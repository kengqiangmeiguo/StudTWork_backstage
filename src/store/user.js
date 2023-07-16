/*
 * @Description-en:
 * @Description-zh:
 * @Author: CodeGetters
 * @version:
 * @Date: 2023-07-14 10:18:29
 * @LastEditors: CodeGetters
 * @LastEditTime: 2023-07-16 21:25:44
 */
import { defineStore } from "pinia";

// TODO:客户端解析 token 获取用户信息

const UseInfoStore = defineStore("userInfo", {
  state: () => ({
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  }),
  actions: {
    async setUserInfo(userInfo) {
      this.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
  },
  getters: {
    async getUserInfo() {
      return this.userInfo;
    },
  },
  persist: {
    key: "userInfo",
    storage: localStorage,
  },
});

export default UseInfoStore;
