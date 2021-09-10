import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: []
  },
  getters: {
    getCityWeather (state) {
      return state.weather
    }
  },
  mutations: {
    getCityWeather (state, cityWeather) {
      state.weather[cityWeather]
      console.log('mutated')
    },
    deleteCityWeather () {
      this.weather.shift
    }
  },
  actions: {
    setCityWeather (context, cityWeather) {
      context.commit('getCityWeather', cityWeather)
      console.log('committed')
    },
    deleteCityWeather (context) {
      context.commit('deleteCityWeather')
    }
  },
  modules: {},
});
