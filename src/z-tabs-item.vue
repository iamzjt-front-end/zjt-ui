<template>
  <div class="z-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-tabs-item",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.z-tabs-item {

}
</style>