// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Icon from 'vue-svg-icon/Icon.vue'

Vue.prototype.$http=axios;

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('icon', Icon)    

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
