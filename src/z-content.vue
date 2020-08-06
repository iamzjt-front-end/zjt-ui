<template>
<div class="z-content">
  <slot></slot>
</div>
</template>

<script>
export default {
name: "z-content"
}
</script>

<style scoped>
.z-content {
  flex-grow: 1;
}
</style>