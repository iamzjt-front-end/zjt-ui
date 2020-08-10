---
title: Layout - 容器布局
---
# Layout - 容器布局

用于布局的容器组件，方便快速搭建页面的基本结构：

`<z-layout>`：外层容器，当子元素中包含 `<z-header>` 或 `<z-footer>` 时，全部子元素会垂直上下排列，不包含则会水平左右排列。

`<z-header>`：顶栏容器。

`<z-content>`：主区域容器。

`<z-sider>`：侧边栏容器。

`<z-footer>`：底栏容器。

::: tip 关于浏览器兼容性的提示：
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<z-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<z-layout>`。
:::

## 示例 1

上中下三栏布局：

<ClientOnly>
  <layout-demo1></layout-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-layout>
  <z-header>header</z-header>
  <z-content>content</z-content>
  <z-footer>footer</z-footer>
</z-layout>
```
:::

## 示例 2

上中下三栏布局，主区域带侧边栏：

<ClientOnly>
  <layout-demo2></layout-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-layout>
  <z-header>header</z-header>
  <z-layout>
    <z-sider>sider</z-sider>
    <z-content>content</z-content>
  </z-layout>
  <z-footer>footer</z-footer>
</z-layout>
```
:::

<ClientOnly>
  <layout-demo3></layout-demo3>
</ClientOnly>

::: details 点击查看代码
```vue
<z-layout>
  <z-header>header</z-header>
  <z-layout>
    <z-content>content</z-content>
    <z-sider>sider</z-sider>
  </z-layout>
  <z-footer>footer</z-footer>
</z-layout>
```
:::

## 示例 3

上中下三栏布局，侧边栏独立：

<ClientOnly>
  <layout-demo4></layout-demo4>
</ClientOnly>

::: details 点击查看代码
```vue
<z-layout>
  <z-sider>sider</z-sider>
  <z-layout>
    <z-header>header</z-header>
    <z-content>content</z-content>
    <z-footer>footer</z-footer>
  </z-layout>
</z-layout>
```
:::