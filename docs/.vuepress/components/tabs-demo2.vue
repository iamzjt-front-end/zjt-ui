<template>
  <div class="container">
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head>
        <template slot="actions">
          <z-button>设置</z-button>
        </template>
        <z-tabs-item name="tab1">tab1</z-tabs-item>
        <z-tabs-item name="tab2" disabled>tab2</z-tabs-item>
        <z-tabs-item name="tab3">tab3</z-tabs-item>
      </z-tabs-head>
      <z-tabs-body>
        <z-tabs-pane name="tab1">tab1的内容...</z-tabs-pane>
        <z-tabs-pane name="tab2">tab2的内容...</z-tabs-pane>
        <z-tabs-pane name="tab3">tab3的内容...</z-tabs-pane>
      </z-tabs-body>
    </z-tabs>
  </div>
</template>

<script>
import ZTabs from '../../../src/z-tabs.vue'
import ZTabsHead from '../../../src/z-tabs-head.vue'
import ZTabsItem from '../../../src/z-tabs-item.vue'
import ZTabsBody from '../../../src/z-tabs-body.vue'
import ZTabsPane from '../../../src/z-tabs-pane.vue'
// import ZButton from '../../../src/z-button.vue'
import ZSpread from '../../../src/z-spread'

export default {
  components: {
    'z-tabs': ZTabs,
    'z-tabs-head': ZTabsHead,
    'z-tabs-body': ZTabsBody,
    'z-tabs-item': ZTabsItem,
    'z-tabs-pane': ZTabsPane,
    // 'z-button': ZButton,
    'z-spread': ZSpread
  },
  data() {
    return {
      selectedTab: 'tab1',
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
