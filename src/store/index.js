import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: [],
    cities: []
  },
  getters: {
    getCityWeather (state) {
      return state.weather
    },
    getCity (state) {
      return state.cities
    }
  },
  mutations: {
    getCityWeather (state, cityWeather) {
      state.weather.push(cityWeather)
    },
    getCity (state, city) {
      state.cities.push(city)
    },
    deleteCity (state, city) {
      state.cities.splice(city, 1)
    }
  },
  actions: {
    setCityWeather (context, cityWeather) {
      context.commit('getCityWeather', cityWeather)
    },
    setCity (context, city) {
      context.commit('getCity', city)
    },
    deleteCity (context, city) {
      context.commit('deleteCity', city)
    },
    deleteCityWeather (context) {
      context.commit('deleteCityWeather')
    }
  },
  modules: {},
});
