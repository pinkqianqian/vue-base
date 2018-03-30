// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.GLOBAL = {}
import Vue from 'vue'
GLOBAL.vbus = window.vbus = new Vue()

import App from './App'
import store from 'Store'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'; // 使用 CSS
import injector from 'Utils/injector' //插件
// import 'Components'// 全局组件注册
import 'Config/ajax'
import 'Directives' // 指令
import VueParticles from 'vue-particles'

import { DEBUG } from 'Config/index'
Vue.config.productionTip = false

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();
Vue.use(VueParticles)
Vue.use(injector) //注册业务所需``
Vue.use(iView) //组件库

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})


// vue debug
Vue.config.debug = DEBUG.v_debug
Vue.config.devtools = DEBUG.v_devtools