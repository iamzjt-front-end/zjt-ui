<template>
  <div class="z-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-tabs-head",
  inject: ['eventBus'],
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.z-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #555555;
  .actions-wrapper {
    margin-left: auto;
  }
}
</style>