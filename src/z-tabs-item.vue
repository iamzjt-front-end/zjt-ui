<template>
  <div class="z-tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "z-tabs-item",
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', name => {
      if(name === this.name) {
        this.active = true
      }else {
        this.active = false
      }
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: skyblue;
.z-tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $font-color;
    font-weight: bold;
  }
}
</style>