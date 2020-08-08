<template>
  <div class="z-collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-collapse-item",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', vm => {
      if(vm !== this) {
        this.close()
      }
    })
  },
  methods: {
    close() {
      this.open = false
    },
    toggle() {
      if(this.open) {
        this.open = false
      } else {
        this.open = true
        this.eventBus && this.eventBus.$emit('update:selected', this)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.z-collapse-item {
  > .title {
    border-bottom: 1px solid $border-color;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }

  > .content {
    padding: 8px;
    border-bottom: 1px solid $border-color;
  }

  &:last-child {
    > .title:last-child {
      border-bottom: none;
    }
    > .content {
      border-bottom: none;
    }
  }
}
</style>