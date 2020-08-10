---
title: Collapse - 手风琴
---
# Collapse - 手风琴

::: tip 说明：
形似手风琴，又名折叠面板，通过折叠收纳内容区域
:::

## 示例 1

可同时展开多个面板，并默认打开某些面板，面板之间不影响：

<ClientOnly>
  <collapse-demo1></collapse-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-collapse :selected.sync="selectedCollapse">
  <z-collapse-item title="标题1" name="1">内容...</z-collapse-item>
  <z-collapse-item title="标题2" name="2">内容...</z-collapse-item>
  <z-collapse-item title="标题3" name="3">内容...</z-collapse-item>
</z-collapse>
```
:::

## 示例 2

可添加参数 single，每次只展开一个面板：

<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-collapse :selected.sync="selectedCollapse" single>
  <z-collapse-item title="标题1" name="1">内容...</z-collapse-item>
  <z-collapse-item title="标题2" name="2">内容...</z-collapse-item>
  <z-collapse-item title="标题3" name="3">内容...</z-collapse-item>
</z-collapse>
```
:::

### Attributes `z-collapse`

<ClientOnly>
  <collapse-parameter></collapse-parameter>
</ClientOnly>

### Attributes `z-collapse-item`

<ClientOnly>
  <collapse-item-parameter></collapse-item-parameter>
</ClientOnly>