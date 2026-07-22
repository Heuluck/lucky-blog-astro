import type { ImageMetadata } from "astro";
import geniusRank from "../../assets/projects/Genius Rank.webp";
import qiniu from "../../assets/projects/七牛云.webp";
import ncuHome from "../../assets/projects/南大家园.webp";
import storyKitchen from "../../assets/projects/故事厨房.webp";
import storyKitchenMini from "../../assets/projects/故事厨房小程序.mm.webp";
import roamAI from "../../assets/projects/漫游指北AI.webp";
import elecQuery from "../../assets/projects/电费查询.webp";

export interface Project {
  title: string;
  year: number;
  description?: string;
  /** 本地导入的图片 (ImageMetadata) 或外部 URL 字符串 */
  image?: ImageMetadata | string;
  link?: string;
  status?: "进行中" | "已完成";
  role?: string;
}

export const projects: Project[] = [
  {
    title: "还没发布的项目",
    year: 2026,
    description:
      "发布了再说",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "iNCU 5.15升级维护",
    year: 2026,
    image: ncuHome,
    description:
      "iNCU 5.15版本升级维护，修复奇葩bug，升级小组件，添加午课。",
    link: "https://incu.ncu.edu.cn/",
    status: "已完成",
    role: "客户端开发",
  },
  {
    title: "Lucky Blog (Astro 重构)",
    year: 2025,
    description:
      "从WordPress迁移到Hexo、Hugo，又从Hugo迁移到Astro，25年iOS 26发布，液态玻璃特效实在惊艳。利用View-Transition API做了一个灵动的玻璃导航栏，随之构思了一个全新的博客主题。",
    link: "https://github.com/Heuluck/lucky-blog-astro",
    status: "进行中",
    role: "前端开发",
  },
  {
    title: "LLPKGStore",
    year: 2025,
    image: qiniu,
    description:
      "在上海七牛云实习期间做的项目，大体是为LLGo（基于LLVM，支持C/C++和Python的Go编译器）提供一个包管理器。用了Conan等工具。小组纠结了很久怎么把各种奇葩C/C++版本号转成Go要求的Semver格式。",
    link: "https://github.com/xgo-dev/llpkg",
    status: "已完成",
    role: "Go开发？",
  },
  {
    title: "Genius Rank",
    year: 2024,
    image: geniusRank,
    description:
      "荣获第一名的第三届七牛云1024创作节「对对队」参赛作品。Genius Rank通过调用GitHub API分析用户活动，实现评分、国籍猜测（赛题要求）与排名，并附带GitHub Stats生成器可嵌入个人主页展示评分。应用了Remix的服务端渲染、渐进增强等理念。",
    link: "https://github.com/Team-DuiDuiDui/GeniusRank",
    status: "已完成",
    role: "全栈开发",
  },
  {
    title: "家园主站",
    year: 2024,
    description:
      "NCUHOME全新主站，首次尝试使用Remix v2框架，支持SSR等特性，其中介绍了不少家园项目。",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "漫游指北AI版",
    year: 2024,
    image: roamAI,
    description:
      "NCUHOME的南昌大学迎新项目，利用AI指导新生熟悉校园环境。大一新生只需要向「小家园」提问便可以获得校园内的路线指引、校园设施和学校生活的相关信息。使用React开发。",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "新Luck博客（并非）",
    year: 2024,
    description:
      "心血来潮写的，用的是 Vike + React（在此之前还用过Next.js）和 Express + MySQL 前后端分离，支持SSR，主页差不多做完了，但是后台只做到富文本编辑器，烂尾了。",
    link: "https://github.com/Heuluck/new-luck-blog-frontend",
    status: "已完成",
    role: "全栈开发",
  },
  {
    title: "电费查询",
    year: 2024,
    image: elecQuery,
    description:
      "iNCU App电费查询迭代项目，从以往的React Native迁移到web端，支持查询宿舍电费，更支持电费日历和缴费查询功能，用电情况一目了然。",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "波浪进度球",
    year: 2024,
    description:
      "为了做出「电费查询」项目，动手做了一个可高度自定义的波浪进度球组件，利用了 SVG，使用 React + TypeScript 开发，支持自定义颜色、大小、波浪宽度、波浪数量和动画速度等。",
    link: "https://github.com/Heuluck/Wave-Progress-Ball-v2",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "故事厨房（小程序）",
    year: 2024,
    image: storyKitchenMini,
    description:
      "将Web版故事厨房（见下）改造成小程序，使用 Taro 框架开发，支持微信小程序。在原有基础上彻底重构（😭），添加了许多动效和新功能。",
    status: "已完成",
    role: "Taro小程序开发",
  },
  {
    title: "故事厨房",
    year: 2023,
    image: storyKitchen,
    description:
      "Hackweek比赛项目、加入NCUHOME后做的第一个项目。选择调料（心情）和食材（故事事件和物品），使用大模型生成一段完整的故事。",
    status: "已完成",
    role: "前端开发",
  },
  {
    title: "Create infoboxes in Mediawiki",
    year: 2022,
    description:
      "初学前端三件套，彼时参与 Sonic Wiki（Wr/音速汉化组自建）时由于没有很好的 infoboxes 插件，遂利用 MediaWiki 的表格功能开发了一个 infoboxes 生成器。",
    link: "https://github.com/Heuluck/Create-infoboxes-in-Mediawiki",
    status: "已完成",
    role: "前端开发",
  },
];
