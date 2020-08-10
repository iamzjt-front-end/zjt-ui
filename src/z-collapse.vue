<template>
  <div class="z-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "z-collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue,
      selectedArray: []
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected', name => {
      this.selectedArray = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        this.selectedArray = [name]
      } else {
        this.selectedArray.push(name)
      }
      this.eventBus.$emit('update:selected', this.selectedArray)
      this.$emit('update:selected', this.selectedArray)
    })
    this.eventBus.$on('update:removeSelected', name => {
      this.selectedArray = JSON.parse(JSON.stringify(this.selected))
      let index = this.selectedArray.indexOf(name)
      this.selectedArray.splice(index, 1)
      this.eventBus.$emit('update:selected', this.selectedArray)
      this.$emit('update:selected', this.selectedArray)
    })
  }
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.z-collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>