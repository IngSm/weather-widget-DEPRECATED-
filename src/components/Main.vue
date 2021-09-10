<template>
  <div class="main">
    <div class="drop-menu">
      <div class="drop-menu__icon">
        <img class="icon" src="@/assets/settings.svg" alt="">
      </div>
      <div class="drop-menu__text">
      </div>
    </div>
    <div class="weather-icon"></div>
    <div class="text-block">
      <div class="text-block__left"></div>
      <div class="text-block__right"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      city: 'London',
      code: 'uk'
    }
  },
  methods: {
  },
  mounted () {
    let a = axios(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&APPID=d23058db742db7cb6fe57437bd010579`)
    a.then(function(result){
      console.log(result)
    })
  },
  computed: {
      ...mapGetters({
        weather: 'getCityWeather'
      })
  }
}
</script>

<style scoped>
.main {
  margin: 0;
  padding: 10px;
  border: 1px solid red;
}
</style>