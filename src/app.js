import Vue from 'vue'
import ZButton from './z-button'
import ZIcon from './z-icon'
import ZButtonGroup from './z-button-group'
import ZInput from './z-input'
import ZRow from './z-row'
import ZCol from './z-col'

Vue.component('z-button', ZButton)
Vue.component('z-icon', ZIcon)
Vue.component('z-button-group', ZButtonGroup)
Vue.component('z-input', ZInput)
Vue.component('z-row', ZRow)
Vue.component('z-col', ZCol)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    }
  }
})