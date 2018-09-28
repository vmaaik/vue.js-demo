import Vue from 'vue'
import App from './App.vue'
import Home from './view/Home.vue';
import ServerDashboard from './view/ServerDashboard.vue';

Vue.component('app-servers', Home);
Vue.component('server-dashboard', ServerDashboard);

new Vue({
  el: '#app',
  render: h => h(App)
})
