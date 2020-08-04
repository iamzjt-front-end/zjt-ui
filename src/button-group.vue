<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name != 'button') {
          console.warn(`z-button-group 的子元素应该全是 z-button, 不能写 ${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .z-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .z-button {
      border-radius: 0;
      &:not(:first-child) {
      margin-left: -1px;
    }

      &:first-child {
        border-top-left-radius: var(--button-radius);
        border-bottom-left-radius: var(--button-radius);
      }

      &:last-child {
        border-top-right-radius: var(--button-radius);
        border-bottom-right-radius: var(--button-radius);
      }

      &:hover {
        z-index: 1;
      }
    }
  }
</style>