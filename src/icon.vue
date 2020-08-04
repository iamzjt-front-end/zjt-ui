<template>
  <svg class="z-icon">
    <use :xlink:href="`#i-${theName}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "icon",
    props: ['theName']
  }
</script>

<style lang="scss" scoped>
  .z-icon {
    width: 1.25em;
    height: 1.25em;
  }
</style>