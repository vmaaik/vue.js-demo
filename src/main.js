import Vue from 'vue'
import App from './App.vue'
import Home from './view/Home.vue';
import ServerDashboard from './view/ServerDashboard.vue';
import UserView from './view/UserView.vue';
import RestAPI from './view/RestAPI.vue';

Vue.component('app-servers', Home);
Vue.component('server-dashboard', ServerDashboard);
Vue.component('user', UserView);
Vue.component('rest', RestAPI);

new Vue({
  el: '#app',
  render: h => h(App)
})
