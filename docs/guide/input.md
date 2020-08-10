---
title: Input - 文本输入框
---
# Input - 文本输入框

::: tip 说明
支持 v-model 双向数据绑定和原生事件
:::

## 示例

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

::: details 点击查看代码
```vue
<z-input value="默认输入框"></z-input>
<z-input value="禁用" disabled></z-input>
<z-input value="只读" readonly></z-input>
<z-input value="事件绑定" @change="inputChange"></z-input>
<z-input value="error提示" error="姓名不能少于两个字"></z-input>
<z-input v-model="message"></z-input>
<p>z-input的内容：{{ message }}</p>
<button @click="message+=1">+1</button>
```
:::

## Attributes

<ClientOnly>
  <input-parameter></input-parameter>
</ClientOnly>

## Events
目前支持事件: change、input、focus、blur