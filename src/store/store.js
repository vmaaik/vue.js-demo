import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// to have a state of an application
export const store = new Vuex.Store({
  // all the properties application has
  state: {
    counter: 0,
    hello: ''
  },

  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + 'Clicks';
    }
  },

  mutations: {
    increment: state => {
      state.counter++;
    },

    decrement: state => {
      state.counter--;
    },

    actions: {
      increment: ({commit}) => {
        commit('increment');
      },
      decrement: ({commit}) => {
        commit('decrement');
      },

      asyncIncrement: ({commit}) => {
        setTimeout(() => {
          commit('increment');
        }, 1000)
      },

      asyncDecrement: ({commit}) => {
        setTimeout(() => {
          commit('decrement');
        }, 1000)
      },

    }
  }
});

