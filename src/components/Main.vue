<template>
  <div :style="returnStyle()" class="main">
    <div class="drop-menu">
      <div @click="" class="drop-menu__icon drop-menu__item">
        <img class="icon" src="@/assets/svgs/settings.svg" alt="">
        <img class="icon second__icon" src="@/assets/svgs/drag_whole.svg" alt="">
      </div>
      <div
        v-text="`${gottenCity[i].weather.name}, ${gottenCity[i].weather.sys.country}`"
        class="drop-menu__text drop-menu__item bold"
      />
    </div>
    <div class="temp-block mt">
      <div class="temp-block__left">
        <div 
          class="text"
          v-text="gottenCity[i].weather.weather[0].main"
        />
        <div 
          class="text"
          v-html="`Feels: ${Math.floor(gottenCity[i].weather.main.feels_like)} &#8451;`"
        />
      </div>
      <div class="temp-block__right">
        <div 
        :style="{ backgroundImage: `url(http://openweathermap.org/img/w/${gottenCity[i].weather.weather[0].icon}.png)` }" 
        class="weather-icon"
        />
        <div
          class="temp-block__text"
          v-html="`${this.gottenCity[i].weather.main.temp.toFixed(0)} &#8451;`"
        />
      </div>
    </div>
    <div class="clock-block">
      <div
        v-text="time" 
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    i: Number
  },
  data () {
    return {
      city: 'Novosibirsk',
      time: this.$date().format('ddd DD MMM YYYY HH:mm:ss'),
      timeZones: []
    }
  },
  methods: {
    makeClock() {
      let tz = this.gottenCity[this.i].weather.timezone
      let date = new Date((new Date().getTime())+tz*1000)
      this.time = date.toUTCString()
    },
    returnStyle() {
    if (this.gottenCity[this.i].weather.main.temp.toFixed(0) < 0) {
      return ''
    } else if ( this.gottenCity[this.i].weather.main.temp.toFixed(0) < 10 ) {
      return 'background: rgba(240, 255, 0, 0.8);'
    } else if ( this.gottenCity[this.i].weather.main.temp.toFixed(0) > 10 ) {
      return 'background: rgba(38, 255, 0, 0.8);'
    }
  },
  },

  mounted() {
    setInterval(() => {
      this.makeClock()
    }, 1000)
    this.timeZones.push(this.$moment.tz.zonesForCountry(this.gottenCity[this.i].weather.sys.country, true))
  },
  
  computed: {
      ...mapGetters({
        gottenCity: 'getCity'
      }),
      visibility () {
        let a = this.gottenCity[this.i].weather.visibility
        return a / 1000
      },
  }
}
</script>

<style scoped>
.text {
  text-transform: capitalize;
}

.second__icon {
  margin-left: 10px;
  cursor: grab;
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
  width: 45%;
}

.text-block__right {
  width: 60%;
}

.text_marginL {
  margin-left: 5px;
}

.spclI {
  height: 20px;
}
</style>