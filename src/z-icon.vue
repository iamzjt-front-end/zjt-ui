<template>
  <svg class="z-icon">
    <use :xlink:href="`#i-${theName}`"></use>
  </svg>
</template>

<script>
  import './svg'

  export default {
    name: "z-icon",
    props: ['theName']
  }
</script>

<style lang="scss" scoped>
  .z-icon {
    width: 1em;
    height: 1em;
  }
</style>