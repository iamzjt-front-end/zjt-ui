<template>
  <div class="z-popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref=triggerWrapper style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "z-popover",
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.toggle)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.toggle)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX,
        },
        left: {
          top: top - Math.abs(height - height2) / 2 + window.scrollY,
          left: left + window.scrollX,
        },
        right: {
          top: top - Math.abs(height - height2) / 2 + window.scrollY,
          left: left + window.scrollX + width,
        }
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {
        return
      }
      if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
              this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    toggle(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$border-color: #999;
$border-radius: 4px;
$bgc: #fff;
.z-popover {
  display: inline-block;
  vertical-align: top;
}

.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  background-color: $bgc;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }

  // 上
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before,
    &::after {
      left: 10px;
    }

    &::before {
      border-top-color: $border-color;
      top: 100%;
      border-bottom: none;
    }

    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
      border-bottom: none;
    }
  }

  // 下
  &.position-bottom {
    margin-top: 10px;

    &::before,
    &::after {
      left: 10px;
    }

    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
      border-top: none;
    }

    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
      border-top: none;
    }
  }

  // 左
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: $border-color;
      left: 100%;
      border-right: none;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
      border-right: none;
    }
  }

  // 右
  &.position-right {
    margin-left: 10px;

    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-right-color: $border-color;
      right: 100%;
      border-left: none;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
      border-left: none;
    }
  }

}
</style>