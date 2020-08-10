---
title: Toast - 信息提示框
---
# Toast - 信息提示框

## 示例

<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

## 代码

::: details 点击查看代码
```vue
<z-button @click="$toast('点击弹出提示')">top</z-button>
<z-button @click="$toast('点击弹出提示', {position:'middle'})">middle</z-button>
<z-button @click="$toast('点击弹出提示', {position:'bottom'})">bottom</z-button>
<z-button @click="$toast('点击弹出提示', {position:'top-left'})">top-left</z-button>
<z-button @click="$toast('点击弹出提示', {position:'top-right'})">top-right</z-button>
<z-button @click="$toast('点击弹出提示', {position:'bottom-left'})">bottom-left</z-button>
<z-button @click="$toast('点击弹出提示', {position:'bottom-right'})">bottom-right</z-button>
```
:::

::: warning 注意：
使用前需要引入vue、plugin，并执行 `Vue.use(plugin)`。另外，弹出框的信息支持html。
:::

### Attributes

<ClientOnly>
  <toast-parameter></toast-parameter>
</ClientOnly>