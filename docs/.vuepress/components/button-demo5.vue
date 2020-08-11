<template>
  <div class="container">
    <z-button type="success" @click="$toast(`你好啊！你的智商余额为999，爆棚啦！`, {position:'top'})">点我有惊喜</z-button>
    <z-button type="info" disabled @click="buttonClick">不可点击</z-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Vue from 'vue'
import ZButton from '../../../src/z-button'

Vue.use(plugin)

export default {
  name: "button-demo",
  components: {
    'z-button': ZButton
  },
  methods: {
    buttonClick() {

    },
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>