<template>
  <button class="z-button" :class=[`icon-${iconPosition}`]
          @click="$emit('click')">
    <z-icon v-if="icon && !loading" :name="icon" class="icon"></z-icon>
    <z-icon v-if="loading" class="loading icon" name="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "z-button",
  // props: ['icon', 'iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator(value) {
        // 属性检查器
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.z-button {
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $button-radius: 4px;
  $color: #999;
  $border-color: #999;
  $border-color-hover: #666;
  font-size: $font-size;
  height: $button-height;
  line-height: $button-height;
  padding: 0 1em;
  border-radius: $button-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    > .icon {
      order: 1;
      margin-right: .15em;
    }

    > .content {
      order: 2;
    }
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .15em;
    }

    > .content {
      order: 1;
    }
  }

  .loading {
    animation: spin 1.7s infinite linear;
  }
}
</style>