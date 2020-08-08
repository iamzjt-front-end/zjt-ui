<template>
  <div class="z-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-collapse",
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.z-collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>