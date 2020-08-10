---
title: Button - 按钮
---
# Button - 按钮

## 示例

### 基本按钮

<ClientOnly>
  <button-demo1></button-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button>默认按钮</z-button>
<z-button type="success">成功按钮</z-button>
<z-button type="primary">主要按钮</z-button>
<z-button type="info">信息按钮</z-button>
<z-button type="danger">危险按钮</z-button>
<z-button type="warning">警告按钮</z-button>
```
:::

### 禁用

<ClientOnly>
  <button-demo2></button-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button disabled>默认按钮</z-button>
<z-button disabled type="success" >成功按钮</z-button>
<z-button disabled type="primary" >主要按钮</z-button>
<z-button disabled type="info">信息按钮</z-button>
<z-button disabled type="danger" >危险按钮</z-button>
<z-button disabled type="warning" >警告按钮</z-button>
```
:::

### 圆角按钮

<ClientOnly>
  <button-demo3></button-demo3>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button round>默认按钮</z-button>
<z-button round type="success">成功按钮</z-button>
<z-button round type="primary">主要按钮</z-button>
<z-button round type="info">信息按钮</z-button>
<z-button round type="danger">危险按钮</z-button>
<z-button round type="warning">警告按钮</z-button>
```
:::

### 带图标按钮

<ClientOnly>
  <button-demo4></button-demo4>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button type="success" icon="info">默认按钮</z-button>
```
:::

### 按钮点击事件

支持click点击事件，disabled不可点击

<ClientOnly>
  <button-demo5></button-demo5>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button type="success" @click="buttonClick" >点我有惊喜</z-button>
<z-button type="info" disabled @click="buttonClick">不可点击</z-button>
```
:::

## Attributes

<ClientOnly>
  <button-parameter></button-parameter>
</ClientOnly>
