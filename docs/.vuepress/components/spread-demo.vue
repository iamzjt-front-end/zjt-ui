<template>
  <div class="container">
    <button @click="show = !show">点击</button>
    <z-spread>
      <div class="example" v-if="show"></div>
    </z-spread>
  </div>
</template>

<script>
import ZSpread from '../../../src/z-spread'
// import ZButton from '../../../src/z-button'

export default {
  name: 'spread-demo',
  data() {
    return {
      show: false,
    }
  },
  components: {
    'z-spread': ZSpread,
    // 'z-button': ZButton
  },
}
</script>

<style lang="scss" scoped>
$bg-yellow: #FBDF51;
.container {
  max-width: 800px;
  margin: 30px auto;
  height: 135px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}

.example {
  margin: 10px auto;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: $bg-yellow;
}
</style>
