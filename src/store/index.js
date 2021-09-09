import Vue from "vue";
import Vuex from "vuex";

import weather from '@/store/modules/weather.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {}
  },
  mutations: {

  },
  actions: {},
  modules: {
    weather
  },
});
