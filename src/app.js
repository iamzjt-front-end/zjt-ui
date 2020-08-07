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
import ZTabs from './z-tabs'
import ZTabsHead from './z-tabs-head'
import ZTabsItem from './z-tabs-item'
import ZTabsBody from './z-tabs-body'
import ZTabsPane from './z-tabs-pane'

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
Vue.component('z-tabs', ZTabs)
Vue.component('z-tabs-head', ZTabsHead)
Vue.component('z-tabs-item', ZTabsItem)
Vue.component('z-tabs-body', ZTabsBody)
Vue.component('z-tabs-pane', ZTabsPane)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: 'tab3'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast4() {
      this.showToast('top-left')
    },
    showToast5() {
      this.showToast('top-right')
    },
    showToast6() {
      this.showToast('bottom-left')
    },
    showToast7() {
      this.showToast('bottom-right')
    },
    showToast(position) {
      this.$toast(`你好啊, 你的智商余额为${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: '关闭',
          callback() {
            console.log('用户已经关闭了')
          }
        },
        autoClose: true,
        enableHtml: true,
        position,
        autoCloseDelay: 3
      });
    }
  },
  created() {

  },
})