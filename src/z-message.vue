<template>
  <transition name="message-fade">
    <div class="r-message" :class="computedClass" :style="computedStyle" v-if="visible">
      <div class="r-message__content">
        <span v-if="type">
          <z-icon :name="getIconName"></z-icon>
        </span>
        {{ message }}
        <span class="close-btn" @click="closeMessage">
          <z-icon name="close"></z-icon>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import ZIcon from './z-icon'
import message from './message'

export default {
  name: 'z-message',
  components: {
    'z-icon': ZIcon
  },
  props: {
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "right"
    },
    type: {
      type: String,
      validator: value => {
        return ["success", "error", "info", "warning"].includes(value);
      }
    }
  },
  data() {
    return {
      visible: false,
      verticalTop: 0,
      baseOffset: 16
    };
  },
  mounted() {
    if (this.autoClose) {
      this.startTimer();
    }

    this.createElment();
  },
  methods: {
    createElment() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    closeMessage() {
      this.visible = false;
    },
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
        timer = null;
      });
    }
  },
  computed: {
    getIconName() {
      const ICONS = {
        success: "gou1",
        error: "chahao",
        info: "info",
        warning: "warn"
      };
      return ICONS[this.type];
    },
    computedClass() {
      return {
        [`r-message--${this.type}`]: this.type
      };
    },
    computedStyle() {
      return {
        top: this.verticalTop + "px",
        ...(this.LR_POSTION && {
          [`${this.position}`]: this.baseOffset + "px"
        }),
        ...(this.CENTER_POSTION && {
          left: "50%",
          marginLeft: "-190px"
        })
      };
    },
    LR_POSTION() {
      return this.position === "left" || this.position === "right";
    },
    CENTER_POSTION() {
      return this.position === "center";
    }
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", () => {
          this.$destroy();
        });
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.r-message {
  width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 1px;

  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  z-index: 99999;
  line-height: 20px;
  transition: top 0.5s;
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.r-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.r-message--success .r-message__content {
  color: #67c23a;
}

.r-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.r-message--warning .r-message__content {
  color: #e6a23c;
}

.r-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.r-message--error .r-message__content {
  color: #f56c6c;
}

.r-message--info .r-message__content {
  color: #909399;
}
</style>