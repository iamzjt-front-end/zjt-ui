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
    },
    name: {
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
    this.eventBus && this.eventBus.$on('update:selected', name => {
      if(name !== this.name) {
        this.close()
      }else {
        this.show()
      }
    })
  },
  methods: {
    close() {
      this.open = false
    },
    show() {
      this.open = true
    },
    toggle() {
      if(this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
      }
    }
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