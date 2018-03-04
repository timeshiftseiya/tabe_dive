import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../App'
import ElementUI from 'element-ui'
import router from './router/index'
import Top from './components/top/index'

Vue.use(ElementUI)
Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
  })
})