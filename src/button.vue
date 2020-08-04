<template>
  <button class="z-button" :class="{[`icon-${iconPosition}`]: true}">
    <z-icon v-if="icon" :the-name="icon" class="icon"></z-icon>
    <z-icon class="loading" the-name="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          // 属性检查器
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .z-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .15em;
      margin-top: .125em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .15em;
        margin-top: .125em;
      }
      > .content {
        order: 1;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>