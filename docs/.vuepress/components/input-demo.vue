<template>
  <div class="container">
    <div class="box">
      <z-input value="默认输入框"></z-input>
    </div>
    <div class="box">
      <z-input value="禁用" disabled></z-input>
    </div>
    <div class="box">
      <z-input value="只读" readonly></z-input>
    </div>
    <div class="box">
      <z-input value="事件绑定" @change="inputChange"></z-input>
    </div>
    <div class="box">
      <z-input value="error提示" error="姓名不能少于两个字"></z-input>
    </div>
    <div class="box">
      <z-input v-model="message"></z-input>
      <p class="input-content">message的内容：{{ message }}</p>
      <button @click="message+=1">点击+1</button>
    </div>
  </div>
</template>

<script>
import ZInput from '../../../src/z-input';

export default {
  name: 'input-demo',
  components: {
    'z-input': ZInput,

  },
  data() {
    return {
      message: '数据双向绑定'
    }
  },
  methods: {
    inputChange(e) {
      alert(`你输入的内容是: ${e}`)
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  .box {
    display: inline-block;
    margin: 0 20px 20px 0;
    &:last-child {
      margin-bottom: 0;
      display: inline-block;
    }
    button {
      height: 30px;
      padding: 0 10px;
    }
  }

  .input-content {
    line-height: 1;
  }

}
</style>
