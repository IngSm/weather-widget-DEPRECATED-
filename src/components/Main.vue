<template>
  <div class="main">
    <div class="drop-menu">
      <div class="drop-menu__icon drop-menu__item">
        <img @click="openConfig" class="icon" src="@/assets/svgs/settings.svg" alt="">
      </div>
      <div
        v-text="`${this.currentTime}`"
        class="drop-menu__text drop-menu__item"
      />
      <div
        v-text="`${gottenWeather[0].name},${gottenWeather[0].sys.country}`"
        class="drop-menu__text drop-menu__item"
      />
    </div>
    <div class="temp-block mt">
      <div class="temp-block__left">
        <div 
          class="text"
          v-text="gottenWeather[0].weather[0].main"
        />
        <div 
          class="text"
          v-html="`Feels: ${Math.floor(gottenWeather[0].main.feels_like)} &#8451;`"
        />
      </div>
      <div class="temp-block__right">
        <div 
        :style="{ backgroundImage: `url(http://openweathermap.org/img/w/${gottenWeather[0].weather[0].icon}.png)` }" 
        class="weather-icon"
        />
        <div
          class="temp-block__text"
          v-html="`${this.gottenWeather[0].main.temp.toFixed(0)} &#8451;`"
        />
      </div>
    </div>
    <div class="text-block mt">
      <div class="text-block__left">
        <div class="flStart">
          <img class="icon" src="@/assets/svgs/wind.svg" alt="">
          <div
            class="text text_marginL"
            v-text="`${this.gottenWeather[0].wind.speed} kmH`"
          />
        </div>
        <div class="flStart">
          <img class="icon spclI" src="@/assets/svgs/humidity.svg" alt="">
          <div
            class="text text_marginL"
            v-text="`${this.gottenWeather[0].main.humidity}`"
          />
        </div>
      </div>
      <div class="text-block__right">
        <div
          class="text"
          v-text="`Visibility: ${this.visibility} km`"
        />
        <div
          class="text"
          v-text="`Pressure: ${this.gottenWeather[0].main.pressure} hPa`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      city: 'Munich',
      currentTime: ''
    }
  },
  methods: {
    openConfig () {
      console.log(1)
    },
    updateTime () {
      let hours = +(this.$moment.utc().format('H')) + +(this.$moment.unix(this.gottenWeather[0].timezone).utc().format('H'))
      let minutes = this.$moment().utc().format('mm')
      let date = this.$moment().utc().format('ddd DD.MM')
      this.currentTime = `${date} ${hours}:${minutes}`
      console.log()
    }
  },
  mounted () {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
      .then(res => {
        this.$store.dispatch('setCityWeather', res.data)
        this.$store.dispatch('setCity', this.city)
      })
      this.currentTime = this.$moment.utc()
      setInterval(() => {
        this.updateTime(), 1*10000
      })
      console.log(this.gottenCity)
  },
  computed: {
      ...mapGetters({
        gottenWeather: 'getCityWeather',
        gottenCity: 'getCity'
      }),
      visibility () {
        let a = this.gottenWeather[0].visibility
        return a / 1000
      }
  }
}
</script>

<style scoped>
.text {
  text-transform: capitalize;
}

.weather-icon {
  width: 40px;
  height: 1.9em;
  background-size: 100%;
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
  font-size: 24px;
}

.text-block__left {
  width: 50%;
}

.text-block__right {
  width: 50%;
}

.text_marginL {
  margin-left: 5px;
}

.spclI {
  height: 20px;
}
</style>