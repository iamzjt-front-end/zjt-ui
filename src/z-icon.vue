<template>
  <svg class="z-icon" aria-hidden="true" @click="handlerClick">
    <use :xlink:href="ZIconName"></use>
  </svg>
</template>

<script>
import "./iconfont";

export default {
  name: "z-icon",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    ZIconName() {
      return `#icon-${this.name}`;
    }
  },
  methods: {
    handlerClick() {
      this.$emit("click");
    }
  }
};
</script>

<style type="text/css">
.z-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>