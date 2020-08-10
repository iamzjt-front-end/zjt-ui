<template>
  <div class="container">
    <z-button @click="showMessage">点击我</z-button>
    <z-button @click="showMessage1">点击我</z-button>
  </div>
</template>

<script>
import message from '../../../src/message'
import Vue from 'vue'
import ZButton from '../../../src/z-button'

Vue.use(message)

export default {
  name: "button-demo",
  components: {
    'z-button': ZButton
  },
  methods: {
    showMessage() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "right",
        type: "error"
      });
    },
    showMessage1() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "center",
        type: "success"
      });
    }
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