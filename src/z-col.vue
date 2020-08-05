<template>
  <div class="z-col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green; height: 100px;"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.z-col {
  height: 100px;
  width: 50%;

  $class-prefix: col-;

  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
  $class-prefix: offset-;

  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}
</style>