<template>
  <div class="container">
    <z-popover position="top" class="distance">
      <template slot="content" slot-scope="{close}">
        <div>content of z-popover</div>
        <z-button @click="close">关闭</z-button>
      </template>
      <z-button>top</z-button>
    </z-popover>
    <z-popover position="bottom" class="distance">
      <template slot="content">
        <div>content of z-popover</div>
      </template>
      <z-button>bottom</z-button>
    </z-popover>
    <z-popover position="left" class="distance">
      <template slot="content">
        <div>content of z-popover</div>
      </template>
      <z-button>left</z-button>
    </z-popover>
    <z-popover position="right" class="distance">
      <template slot="content">
        <div>content of z-popover</div>
      </template>
      <z-button>right</z-button>
    </z-popover>
  </div>
</template>

<script>
import ZPopover from '../../../src/z-popover'
import ZButton from '../../../src/z-button'

export default {
  name: "popover-demo",
  components: {
    'z-popover': ZPopover,
    'z-button': ZButton
  }

}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  .distance {
    margin: 0 10px;
  }
}
</style>