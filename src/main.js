import Vue from 'vue'
import App from './App.vue'
import './assets/styles/site.css'
// import Vuex from 'vuex'
import router from './router/index'


import store from './store/index'


Vue.config.productionTip = false

new Vue({
     render: h => h(App),
     store: store,
     router

}).$mount('#app')
