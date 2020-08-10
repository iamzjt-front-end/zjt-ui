---
title: Grid - 网格系统
---
# Grid - 网格系统

通过 24 分栏，快速创建网页布局

## 示例 1：三栏布局/不等分布局

通过 z-row 嵌套 z-col 组件，并给定 z-col 组件的 `span` 属性我们就可以自由地组合布局

<ClientOnly>
  <grid-demo1></grid-demo1>
</ClientOnly>

::: details 点击查看代码
```vue
<z-row>
  <z-col span="24">24</z-col>
</z-row>
<z-row>
  <z-col span="4">4</z-col>
  <z-col span="16">16</z-col>
  <z-col span="4">4</z-col>
</z-row>
<z-row>
  <z-col span="12">12</z-col>
  <z-col span="12">12</z-col>
</z-row>
<z-row>
  <z-col span="8">8</z-col>
  <z-col span="8">8</z-col>
  <z-col span="8">8</z-col>
</z-row>
<z-row>
  <z-col span="6">6</z-col>
  <z-col span="6">6</z-col>
  <z-col span="6">6</z-col>
  <z-col span="6">6</z-col>
</z-row>
<z-row>
  <z-col span="4">4</z-col>
  <z-col span="4">4</z-col>
  <z-col span="4">4</z-col>
  <z-col span="4">4</z-col>
  <z-col span="4">4</z-col>
  <z-col span="4">4</z-col>
</z-row>
```
:::

## 示例 2：设置 gutter / offset

通过传入 `gutter` 或者 `offset` 属性设置分栏间隙

<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

::: details 点击查看代码
```vue
<z-row gutter="20">
  <z-col span="6">
    <div >间隔 20px</div>
  </z-col>
  <z-col span="18">
    <div >间隔 20px</div>
  </z-col>
</z-row>
<z-row>
  <z-col span="2">1</z-col>
  <z-col span="21" offset="1">21</z-col>
</z-row>
```
:::

## 示例 3：支持响应式布局

不同媒体配置不同跨度，实现响应式布局

<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

::: details 点击查看代码
```vue
<z-row>
  <z-col span="1" :ipad="{span:'2'}" :narrow-pc="{span:'3'}"
         :pc="{span:'4'}" :wide-pc="{span:'5'}">1
  </z-col>
  <z-col span="22" :ipad="{span:'20'}" :narrow-pc="{span:'18'}"
         :pc="{span:'16'}" :wide-pc="{span:'14'}">2
  </z-col>
  <z-col span="1" :ipad="{span:'2'}" :narrow-pc="{span:'3'}"
         :pc="{span:'4'}" :wide-pc="{span:'5'}">3
  </z-col>
</z-row>
<z-row>
  <z-col span="1" :ipad="{span:'2'}" :narrow-pc="{span:'3'}"
         :pc="{span:'4'}"  :wide-pc="{span:'5'}">1
  </z-col>
  <z-col span="23" :ipad="{span:'22'}" :narrow-pc="{span:'21'}"
         :pc="{span:'20'}"  :wide-pc="{span:'19'}">2
  </z-col>
</z-row>
<z-row>
  <z-col span="23" :ipad="{span:'22'}" :narrow-pc="{span:'21'}"
         :pc="{span:'20'}"  :wide-pc="{span:'19'}">1
  </z-col>
  <z-col span="1" :ipad="{span:'2'}" :narrow-pc="{span:'3'}"
         :pc="{span:'4'}"  :wide-pc="{span:'5'}">2
  </z-col>
</z-row>
```
:::

### Attributes

默认在屏幕宽度为 min-width: 993px 的设备上表现

<ClientOnly>
  <grid-parameter></grid-parameter>
</ClientOnly>