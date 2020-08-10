<template>
  <div class="container">
    <z-collapse :selected.sync="selectedCollapse">
      <z-collapse-item title="标题1" name="1">内容...</z-collapse-item>
      <z-collapse-item title="标题2" name="2">内容...</z-collapse-item>
      <z-collapse-item title="标题3" name="3">内容...</z-collapse-item>
    </z-collapse>
  </div>
</template>

<script>
import ZCollapse from '../../../src/z-collapse';
import ZCollapseItem from '../../../src/z-collapse-item'

export default {
  name: 'collapse-demo1',
  data() {
    return {
      selectedCollapse: ['1', '2']
    }
  },
  components: {
    'z-collapse': ZCollapse,
    'z-collapse-item': ZCollapseItem
  },
};
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
