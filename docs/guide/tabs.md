---
title: Tabs - 标签页
---
# Tabs - 标签页

::: tip 说明
简洁好看的标签页，用于分隔内容上有关联但属于不同类别的数据集合
:::

## 示例 1

普通标签页（默认显示tab2）：

<ClientOnly>
  <tabs-demo1></tabs-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-tabs :seleted.sync="selectedTab">
  <z-tabs-head>
    <template slot="actions">
      <z-button>点击</z-button>
    </template>
    <z-tabs-item name="tab1">tab1</z-tabs-item>
    <z-tabs-item name="tab2">tab2</z-tabs-item>
    <z-tabs-item name="tab3">tab3</z-tabs-item>
  </z-tabs-head>
  <z-tabs-body>
    <z-tabs-pane name="tab1">tab1的内容...</z-tabs-pane>
    <z-tabs-pane name="tab2">tab2的内容...</z-tabs-pane>
    <z-tabs-pane name="tab3">tab3的内容...</z-tabs-pane>
  </z-tabs-body>
</z-tabs>
```
:::

## 示例 2

禁用tab2标签（默认显示tab1）：

<ClientOnly>
  <tabs-demo2></tabs-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-tabs :seleted.sync="selectedTab">
  <z-tabs-head>
    <template slot="actions">
      <z-button>点击</z-button>
    </template>
    <z-tabs-item name="tab1">tab1</z-tabs-item>
    <z-tabs-item name="tab2" disabled>tab2</z-tabs-item>
    <z-tabs-item name="tab3">tab3</z-tabs-item>
  </z-tabs-head>
  <z-tabs-body>
    <z-tabs-pane name="tab1">tab1的内容...</z-tabs-pane>
    <z-tabs-pane name="tab2">tab2的内容...</z-tabs-pane>
    <z-tabs-pane name="tab3">tab3的内容...</z-tabs-pane>
  </z-tabs-body>
</z-tabs>
```
:::

### Attributes `z-tabs`

<ClientOnly>
  <tabs-parameter></tabs-parameter>
</ClientOnly>

### Attributes `z-tabs-head`

<ClientOnly>
  <tabs-head-parameter></tabs-head-parameter>
</ClientOnly>

### Attributes `z-tabs-item`/ `z-tabs-pane`

<ClientOnly>
  <tabs-item-parameter></tabs-item-parameter>
</ClientOnly>
