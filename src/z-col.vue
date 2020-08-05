<template>
  <div class="z-col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-col",
  props: {
    span: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss" scoped>
.z-col {
  height: 100px;
  background-color: grey;
  width: 50%;
  border: 1px solid red;

  $class-prefix: col-;

  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
}
</style>