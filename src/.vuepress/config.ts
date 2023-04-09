import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "CO2 Blog Web",
      description: "A web to collect garbage.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "中文页面（不会主要更新）",
      description: "推荐回到英文界面",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
