<template>
  <div class="z-tabs-item" @click="onClick" :class="classes">
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
        active: this.active,
        disabled: this.disabled
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
    onClick() {
      if (this.disabled) {
        return
      }
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: #20B2AA;
$disabled-color: #999;
.z-tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  user-select:none;
  &.active {
    color: $font-color;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>