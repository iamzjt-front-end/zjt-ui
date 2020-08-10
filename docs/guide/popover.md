---
title: Popover - 弹出气泡
---
# Popover - 弹出气泡

可用于弹出信息，拥有不同的触发方式

## 示例 1

`click`触发

<ClientOnly>
  <popover-demo1></popover-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-popover position="top">
  <template slot="content" slot-scope="{close}">
    <div>content of z-popover</div>
    <z-button @click="close">关闭</z-button>
  </template>
  <z-button>top</z-button>
</z-popover>

<z-popover position="bottom">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>bottom</z-button>
</z-popover>

<z-popover position="left">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>left</z-button>
</z-popover>

<z-popover position="right">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>right</z-button>
</z-popover>
```
:::

## 示例 2

`hover`触发

<ClientOnly>
  <popover-demo2></popover-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-popover position="top" trigger="hover">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>top</z-button>
</z-popover>

<z-popover position="bottom" trigger="hover">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>bottom</z-button>
</z-popover>

<z-popover position="left" trigger="hover">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>left</z-button>
</z-popover>

<z-popover position="right" trigger="hover">
  <template slot="content">
    <div>content of z-popover</div>
  </template>
  <z-button>right</z-button>
</z-popover>
```
:::

## API

<ClientOnly>
  <popover-parameter></popover-parameter>
</ClientOnly>