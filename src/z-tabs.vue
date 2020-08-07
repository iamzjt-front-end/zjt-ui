<template>
  <div class="z-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "z-tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style lang="scss" scoped>
.z-tabs {
  width: 500px;
}
</style>