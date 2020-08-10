<template>
  <div class="wrapper" :class="toastClasses">
    <div class="z-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyles()
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 0.88s;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes slide-down-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-up-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes slide-up-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.wrapper {
  position: fixed;
  transform: translateX(-50%);

  &.position-top {
    top: 1%;
    left: 50%;
    .z-toast {
      animation: slide-down $animation-duration;
    }
  }

  &.position-top-left {
    top: 1%;
    left: 0.25%;
    transform: translateX(0%);
    .z-toast {
      animation: slide-down-left $animation-duration;
    }
  }

  &.position-top-right {
    top: 1%;
    right: 0.25%;
    transform: translateX(0%);
    .z-toast {
      animation: slide-down-right $animation-duration;
    }
  }

  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    .z-toast {
      animation: fade-in $animation-duration;
    }
  }

  &.position-bottom {
    bottom: 1%;
    left: 50%;
    .z-toast {
      animation: slide-up $animation-duration;
    }
  }

  &.position-bottom-left {
    bottom: 1%;
    left: 0.25%;
    transform: translateX(0%);
    .z-toast {
      animation: slide-up-left $animation-duration;
    }
  }

  &.position-bottom-right {
    bottom: 1%;
    right: 0.25%;
    transform: translateX(0%);
    .z-toast {
      animation: slide-up-right $animation-duration;
    }
  }
}

.z-toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  color: white;
  padding: 0 16px;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

  .message {
    padding: 8px 0;
  }

  .close {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .line {
    height: 100%;
    border-left: 1px solid #888;
    margin-left: 16px;
  }
}
</style>