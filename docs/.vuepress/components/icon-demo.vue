<template>
  <div class="container">
    <z-icon name="gou1"></z-icon>
    <z-icon name="chahao"></z-icon>
    <z-icon name="loading"></z-icon>
    <z-icon name="delete"></z-icon>
    <z-icon name="warn"></z-icon>
    <z-icon name="jian"></z-icon>
    <z-icon name="success1"></z-icon>
    <z-icon name="jia"></z-icon>
    <z-icon name="gou"></z-icon>
    <z-icon name="rili"></z-icon>
    <z-icon name="mimakejian"></z-icon>
    <z-icon name="right"></z-icon>
    <z-icon name="ziyuan"></z-icon>
    <z-icon name="upload"></z-icon>
    <z-icon name="close"></z-icon>
    <z-icon name="up"></z-icon>
    <z-icon name="down"></z-icon>
    <z-icon name="search"></z-icon>
    <z-icon name="arrowdown-copy"></z-icon>
    <z-icon name="arrowdown"></z-icon>
    <z-icon name="success"></z-icon>
    <z-icon name="info"></z-icon>
    <z-icon name="Arrowrotationcontrol"></z-icon>
  </div>
</template>

<script>
import ZIcon from '../../../src/z-icon'
import iconfont from '../../../src/iconfont'
import Vue from 'vue'

Vue.use(iconfont)

export default {
  name: "icon-demo",
  components: {
    'z-icon': ZIcon
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
  font-size: 25px;
}
</style>