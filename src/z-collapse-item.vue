<template>
  <div class="z-collapse-item">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <z-spread>
      <div class="content" ref="content" v-if="open">
        <slot></slot>
      </div>
    </z-spread>
  </div>
</template>

<script>
import ZSpread from './z-spread'
export default {
  name: "z-collapse-item",
  components: {
    'z-spread': ZSpread
  },
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
      open: false,
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', names => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true
      } else {
        this.open = false
      }
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
$bgc: #e8e8e8;
.z-collapse-item {
  > .title {
    border-bottom: 1px solid $border-color;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
    background-color: $bgc;
  }

  > .content {
    padding: 20px;
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