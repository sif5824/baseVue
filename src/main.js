import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from './axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(CKEditor)
Vue.use(ElementUI)
Vue.prototype.Axios = Axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
