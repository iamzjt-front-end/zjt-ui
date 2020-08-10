<template>
  <div class="container">
    <z-button>默认按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
  </div>
</template>

<script>
import ZButton from '../../../src/z-button'

export default {
  name: "button-demo",
  components: {
    'z-button': ZButton
  },
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