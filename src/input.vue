<template>
  <div class="wrapper" :class="{'error': error}">
    <input type="text" class="z-input" :value="value" :disabled=disabled :readonly="readonly">
    <template v-if="error">
      <icon the-name="error" class="icon-error"></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "z-input",
    components: {
      Icon,
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $red: #F1452D;
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }

    .z-input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: 0 1px 3px $box-shadow-color inset;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      .z-input {
        border-color: $red;
        &:focus {
          box-shadow: 0px 1px 3px $red inset;
          outline: none;
        }
      }
    }
    .icon-error {
      fill: $red;
    }
    .error-message {
      color: $red;
    }
  }
</style>