<template>
  <div class="z-col" :class="colClass"
       :style="colStyle">
    <div class="col-content">
      <slot></slot>
    </div>
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
  },
  computed: {
    colClass() {
      let {span, offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.z-col {
  height: 50px;
  width: 50%;

  .col-content {
    border: 1px solid green;
    height: 50px;
  }

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