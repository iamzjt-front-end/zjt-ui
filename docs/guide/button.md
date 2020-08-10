---
title: Button - 按钮
---
# Button - 按钮

## 示例

### 基本按钮

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button :loading="loading1"
          @click="loading1 = !loading1">默认按钮
</z-button>
<z-button icon="settings" :loading="loading2"
          @click="loading2 = !loading2">默认按钮
</z-button>
<z-button icon="settings" icon-position="left" :loading="loading3"
          @click="loading3 = !loading3">默认按钮
</z-button>
```
:::

### 按钮组

<ClientOnly>
  <button-group-demo></button-group-demo>
</ClientOnly>

::: details 点击查看代码
```vue
<z-button-group>
  <z-button icon="left" icon-position="left">上一页</z-button>
  <z-button>更多</z-button>
  <z-button icon="right">下一页</z-button>
</z-button-group>
```
:::

## Attributes

<ClientOnly>
  <button-parameter></button-parameter>
</ClientOnly>
