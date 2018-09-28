import Vue from 'vue'
import App from './App.vue'
import Home from './view/Home.vue';
import ServerDashboard from './view/ServerDashboard.vue';
import UserView from './view/UserView.vue';

Vue.component('app-servers', Home);
Vue.component('server-dashboard', ServerDashboard);
Vue.component('user', UserView);

new Vue({
  el: '#app',
  render: h => h(App)
})
