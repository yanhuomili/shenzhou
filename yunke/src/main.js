// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'  

//import svgpath from 'svgpath';
//import qr from 'qr-image';
import QRCode from 'qrcode'
//引入swiper插件
import Swiper from 'swiper'
import './assets/css/swiper.min.css'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
