<template>
  <div class="container">
    <z-button @click="$toast('点击弹出提示')">top</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'middle'})">middle</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'bottom'})">bottom</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'top-left'})">top-left</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'top-right'})">top-right</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'bottom-left'})">bottom-left</z-button>
    <z-button @click="$toast('点击弹出提示', {position:'bottom-right'})">bottom-right</z-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Vue from 'vue'
import ZButton from '../../../src/z-button'

Vue.use(plugin)

export default {
  name: "toast-demo",
  components: {
    'z-button': ZButton
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>