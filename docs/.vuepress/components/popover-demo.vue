<template>
  <div class="container">
    <div>
      <z-popover position="top">
        <template slot="content" slot-scope="{close}">
          <div>content of z-popover</div>
          <button @click="close">关闭</button>
        </template>
        <button>top</button>
      </z-popover>
      <z-popover position="bottom">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>bottom</button>
      </z-popover>
      <z-popover position="left">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>left</button>
      </z-popover>
      <z-popover position="right">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>right</button>
      </z-popover>
    </div>

    <div>
      <z-popover position="top" trigger="hover">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>top</button>
      </z-popover>
      <z-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>bottom</button>
      </z-popover>
      <z-popover position="left" trigger="hover">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>left</button>
      </z-popover>
      <z-popover position="right" trigger="hover">
        <template slot="content">
          <div>content of z-popover</div>
        </template>
        <button>right</button>
      </z-popover>
    </div>
  </div>
</template>

<script>
import ZPopover from '../../../src/z-popover'
// import ZButton from '../../../src/z-button'

export default {
  name: "popover-demo",
  components: {
    'z-popover': ZPopover
    // 'z-button': ZButton
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
}
</style>