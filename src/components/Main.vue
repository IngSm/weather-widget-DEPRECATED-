<template>
  <div class="main">
    <div class="drop-menu">
      <div class="drop-menu__icon">
        <img class="icon" src="@/assets/svgs/settings.svg" alt="">
      </div>
      <div
        v-text="`${gottenWeather[0].name},${gottenWeather[0].sys.country}`"
        class="drop-menu__text"
      />
    </div>
    <div class="temp-block">
      <div class="temp-block__left">
        <div 
          class="text"
          v-text="gottenWeather[0].weather[0].main"
        />
        <div 
          class="text"
          v-html="`Feels: ${gottenWeather[0].main.feels_like.toFixed(0)} &#8451;`"
        />
      </div>
      <div class="temp-block__right">
        <div 
        :style="{ backgroundImage: `url(http://openweathermap.org/img/w/${gottenWeather[0].weather[0].icon}.png)` }" 
        class="weather-icon"
        />
        <div
          class="temp-block__text"
          v-html="`${this.temp} &#8451;`"
        />
      </div>
    </div>
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
      city: 'Moscow',
      code: 'ru'
    }
  },

  methods: {
  },
  mounted () {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
      .then(res => {
        this.$store.dispatch('setCityWeather', res.data)
      })
  },
  computed: {
      ...mapGetters({
        gottenWeather: 'getCityWeather'
      }),
      temp () {
        let a = this.gottenWeather[0].main.temp.toFixed(0)
        return a
      }
  }
}
</script>

<style scoped>
.main {
  margin: 0;
  padding: 10px;
  background: #66B2FF;
  border-radius: 20px;
  box-shadow: -2px 2px #3399FF;
}

.text {
  text-transform: capitalize;
}

.weather-icon {
  width: 50%;
  height: 1.9em;
  background-size: cover;
  background-repeat: no-repeat;
}

.temp-block__right {
  width: 50%;
}

.temp-block__left {
  width: 50%;
  text-align: left;
  padding-bottom: 2px;
  box-sizing: border-box;
}

.temp-block__text {
  font-size: 25px;
}
</style>