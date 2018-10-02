import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// to have a state of an application
export const store = new Vuex.Store({
  // all the properties application has
  state: {
    counter: 0
  }
});
