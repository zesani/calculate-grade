// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import InputGrade from './components/InputGrade'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(Vuetify)
Vue.use(VueRouter)
const routes = [
  { path: '/input-grade', component: InputGrade }
]
const router = new VueRouter({
  routes // short for routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
