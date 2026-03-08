---
title: "你又想换？！"
pubDate: "Dec 02 2025"
description: "刚从 Hexo 换到 Hugo，又想试试 Astro......不过这次理由很充分！"
tags: "静态页面生成器"
categories: "随记"
---
之前做切图仔时，特别喜欢动画效果，尤其是过渡动画，如果在网页上看到类似 [Shared Element](https://www.npmjs.com/package/react-native-shared-element)（或者对熟悉 Flutter 的朋友来说，[Hero animations](https://docs.flutter.cn/cookbook/navigation/hero-animations/)）的效果，肯定会多看两眼。

然而不幸的是，像 Hexo 或者 Hugo 这种静态页面生成器，想要实现这种效果，实在是太难了。因为它们生成的页面都是静态的 HTML 文件，无法像 SPA 那样轻松地实现复杂的动画效果。我也考虑过使用新进的 View Transitions API，但它的浏览器支持度还不够好，尤其是 Firefox 浏览器，到目前仍然不支持这个 API。

这时才刚切换到 Hugo 不到一天的我看上了 Astro...

> [视图过渡动画（View transitions）](https://docs.astro.build/zh-cn/guides/view-transitions/) 是在不同网站视图之间的动画过渡。它们是保留视觉连续性的流行设计选择，当访客在应用程序的状态或视图之间切换时，可以保持视觉上的连贯性。
> 
> Astro 的视图过渡动画和客户端路由支持由 View Transitions 浏览器 API 提供支持。

乍一看，也要用到 View Transitions API，但我们接着往下看：

> ...但也包含了对其他浏览器的默认回退支持。即使当浏览器不支持视图过渡动画 API 时，Astro 的客户端路由仍然可以使用其中一个回退选项提供来浏览器导航...默认 Astro 将在更新页面内容之前使用自定义属性模拟视图过渡动画。

Astro 提供了对不支持 View Transitions API 浏览器的回退支持，这意味着即使在这些浏览器中，用户仍然可以体验到类似的动画效果。

最重要的是，Astro 还[支持各大前端框架](https://docs.astro.build/zh-cn/guides/framework-components/)，我们可以在 Astro 项目中使用 React、Vue、Svelte 等框架来实现复杂的动画效果，即便最终会渲染为静态 HTML，我们也可以选择在正确的时机注水（hydrate）来激活这些组件：

> 你可以在无需舍弃你所喜欢的组件框架的情况下使用 Astro 构建站点。而是可以任意选择的 UI 框架来创建 Astro 群岛。

等不及了，准备明天就到 Astro 上试试水😋。
