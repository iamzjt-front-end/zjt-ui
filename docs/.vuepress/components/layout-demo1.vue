<template>
  <div class="container">
    <z-layout class="layout">
      <z-header class="header">header</z-header>
      <z-content class="content">content</z-content>
      <z-footer class="footer">footer</z-footer>
    </z-layout>
  </div>
</template>

<script>
import ZLayout from '../../../src/z-layout'
import ZHeader from '../../../src/z-header'
import ZContent from '../../../src/z-content'
import ZFooter from '../../../src/z-footer'

export default {
  name: "layout-demo",
  components: {
    'z-layout': ZLayout,
    'z-header': ZHeader,
    'z-content': ZContent,
    'z-footer': ZFooter,
  },
}
</script>

<style lang="scss" scoped>
$bgc1: #99A9BF;
$bgc2: #D3DCE6;
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
  .layout {
    height: 100%;
  }
}

.header {
  background-color: $bgc2;
  min-height: 40px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  text-align: center;
  line-height: 40px;
}

.content {
  background-color: $bgc1;
  min-height: 140px;
  text-align: center;
  line-height: 140px;
}

.footer {
  text-align: center;
  background-color: $bgc2;
  min-height: 40px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  line-height: 40px;
}
</style>