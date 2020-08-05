<template>
  <div class="z-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-row"
}
</script>

<style lang="scss" scoped>
.z-row {
  display: flex;
}

</style>