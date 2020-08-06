import Vue from 'vue'
import ZButton from './z-button'
import ZIcon from './z-icon'
import ZButtonGroup from './z-button-group'
import ZInput from './z-input'
import ZRow from './z-row'
import ZCol from './z-col'
import ZLayout from './z-layout'
import ZHeader from './z-header'
import ZSider from './z-sider'
import ZContent from './z-content'
import ZFooter from './z-footer'
import ZToast from './z-toast'
import plugin from './plugin'

Vue.component('z-button', ZButton)
Vue.component('z-icon', ZIcon)
Vue.component('z-button-group', ZButtonGroup)
Vue.component('z-input', ZInput)
Vue.component('z-row', ZRow)
Vue.component('z-col', ZCol)
Vue.component('z-layout', ZLayout)
Vue.component('z-header', ZHeader)
Vue.component('z-sider', ZSider)
Vue.component('z-content', ZContent)
Vue.component('z-footer', ZFooter)
Vue.component('z-toast', ZToast)
Vue.use(plugin)

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
    },
    showToast() {
      this.$toast('我是 message');
    }
  },
  created() {}
})