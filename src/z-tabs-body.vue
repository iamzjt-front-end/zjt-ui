<template>
  <div class="z-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-tabs-body",
  inject: ['eventBus'],
}
</script>

<style lang="scss" scoped>
.z-tabs-body {

}
</style>