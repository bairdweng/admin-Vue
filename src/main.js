import Vue from 'vue'
import 'muse-ui/dist/muse-ui.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import './less/Customstyle.less'
import './less/globalstyle.less'
// import MuseUI from 'muse-ui'
import './api/api'
import router from './router/routes'
import store from './store/store'//使用vuex。
import './tools/tools'

import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

import Mock from './server/mock.js'
// MuseUI.config({
//     disableTouchRipple: true,
//     disableFocusRipple: true
// })
// // Vue.use(MuseUI)
const app = new Vue({
  router,
  store,
}).$mount('#app')
window.HOST_NAME = "http://192.168.9.238";


