<template>
  <div class="z-col" :class="colClass"
       :style="colStyle">
    <div class="col-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "z-col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    }

  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone && [`col-phone-${phone.span}`]),
        ...(ipad && [`col-ipad-${ipad.span}`]),
        ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
        ...(pc && [`col-pc-${pc.span}`]),
        ...(widePc && [`col-wide-pc-${widePc.span}`])
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
    background-image: linear-gradient(to right, #f6f5f0, skyblue, #f6f5f0);
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

  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-pnarrow-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
}
</style>