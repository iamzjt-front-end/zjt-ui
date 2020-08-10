---
title: Spread - 展开动画
---

# Spread - 展开动画

::: tip 适用于：
为使用 `v-if` / `v-show` 控制显示关闭的组件或元素添加过渡动画
:::

## 示例

<ClientOnly>
  <spread-demo></spread-demo>
</ClientOnly>

## 代码

::: details 点击查看代码
```vue
<template>
  <z-button @click="show = !show">点击</z-button>
  <z-spread>
    <div class="example" v-if="show"></div>
  </z-spread>
</template>

<script>
import ZSpread from '../../../src/z-spread'
import ZButton from '../../../src/z-button'

export default {
  name: 'spread-demo',
  data() {
    return {
      show: false,
    }
  },
  components: {
    'z-spread': ZSpread,
    'z-button': ZButton
  },
}
</script>
```
:::

## Attributes

<ClientOnly>
  <spread-parameter></spread-parameter>
</ClientOnly>