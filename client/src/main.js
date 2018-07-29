import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import firebase from './firebase/firebase'
// import swal from 'sweetalert'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$todo = firebase.ref('kanban/todo')
Vue.prototype.$ongoing = firebase.ref('kanban/ongoing')
Vue.prototype.$done = firebase.ref('kanban/done')


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
