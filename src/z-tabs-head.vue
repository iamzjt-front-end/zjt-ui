<template>
  <div class="z-tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-tabs-head",
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (item, vm) => {
      this.updateLinePosition(vm)
    })
  },
  methods: {
    updateLinePosition (selectedVm) {
      let {width, left} = selectedVm.$el.getBoundingClientRect()
      let {left: left2} = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left2}px`
    }
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-color: #20B2AA;
.z-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #ddd;
  .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.3em;
  }
  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $border-color;
    transition: all 0.3s;
  }
}
</style>