import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cities: []
  },
  getters: {
    getCity (state) {
      return state.cities
    }
  },
  mutations: {
    getCity (state, city) {
      state.cities.push(city)
    },
    deleteCity (state, city) {
      state.cities.splice(city, 1)
    },
    updateList (state, value) {
      state.cities = value
    }
  },
  actions: {
    setCity (context, city) {
      context.commit('getCity', city)
    },
    deleteCity (context, city) {
      context.commit('deleteCity', city)
    },
    makeCityFirst (context, city) {
      context.commit('makeCityFirst', city)
    },
    commitUpdateList (context, city) {
      context.commit('updateList', city)
    }
  },
  modules: {},
});
