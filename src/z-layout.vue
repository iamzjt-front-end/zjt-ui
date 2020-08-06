<template>
  <div class="z-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-layout",
  data() {
    return {
      layoutClass: {
        hasZSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if(vm.$options.name === 'z-sider') {
        this.layoutClass.hasZSider = true;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.z-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 2px solid #ccc;
  &.hasZSider {
    flex-direction: row;
  }
}
</style>