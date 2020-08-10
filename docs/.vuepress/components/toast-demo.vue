<template>
  <div class="container">
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
    <button @click="showToast4">top-left</button>
    <button @click="showToast5">top-right</button>
    <button @click="showToast6">bottom-left</button>
    <button @click="showToast7">bottom-right</button>
  </div>
</template>

<script>
import ZToast from '../../../src/z-toast'
import plugin from '../../../src/plugin'
import Vue from 'vue'
// import ZButton from '../../../src/z-button'

Vue.use(plugin)

export default {
  name: "toast-demo",
  components: {
    'z-toast': ZToast,
    // 'z-button': ZButton
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast4() {
      this.showToast('top-left')
    },
    showToast5() {
      this.showToast('top-right')
    },
    showToast6() {
      this.showToast('bottom-left')
    },
    showToast7() {
      this.showToast('bottom-right')
    },
    showToast(position) {
      this.$toast(`你好啊, 你的智商余额为${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: '关闭',
          callback() {
            alert('这个是关闭后执行的回调函数')
          }
        },
        autoClose: true,
        enableHtml: true,
        position,
        autoCloseDelay: 3
      });
    }
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