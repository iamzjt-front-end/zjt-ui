<template>
  <div class="z-tabs-head">
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
  created() {
    this.eventBus.$on('update:selected', item => {
      console.log(item);
    })
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-color: skyblue;
.z-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  .actions-wrapper {
    margin-left: auto;
  }
  .line {
    position: absolute;
    bottom: 0;
    width: 70px;
    border-bottom: 3px solid $border-color;
  }
}
</style>