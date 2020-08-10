<template>
  <z-spread>
    <div class="z-tabs-pane" :class="classes" v-if="active">
      <slot></slot>
    </div>
  </z-spread>
</template>

<script>
import ZSpread from './z-spread'

export default {
  name: "z-tabs-pane",
  components: {
    'z-spread': ZSpread
  },
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
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
  }
}
</script>

<style lang="scss" scoped>
.z-tabs-pane {
  padding: 3em 2em;
  &.active {
  }
}
</style>