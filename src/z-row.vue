<template>
  <div class="z-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
     vm.gutter = this.gutter;
    })
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter/2+'px',
        marginRight: -this.gutter/2+'px'
      }
    },
    rowClass() {
      return [this.align && `align-${this.align}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.z-row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}

</style>