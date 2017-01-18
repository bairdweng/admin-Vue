// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import adminlite from 'admin-lte'
/* eslint-disable no-new */


//导入框架。
import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/plugins/iCheck/flat/blue.css'
import 'admin-lte/plugins/morris/morris.css'
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.css'
import 'admin-lte/plugins/datepicker/datepicker3.css'
import 'admin-lte/plugins/daterangepicker/daterangepicker.css'
import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


