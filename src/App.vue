<template>
  <div id="app">
    <div class="container" v-for="(item, key) in gottenCitites" :key="key">
      <div @click="openMenu()" class="clickable" />
      <div class="second__click" />
      <div class="mt"><Main :i="key"/></div>
    </div>
    <div style="height: 20px;" />
    <Choice @close="open = false" v-if="open"/>
  </div>
</template>

<script>
import store from './store'
import axios from 'axios'
import geo from '@/api/geo.js'
import { mapGetters } from 'vuex'
import Choice from '@/components/Choice.vue'
import Main from '@/components/Main.vue'
export default {
  store,
  name: "App",
  data () {
    return {
      open: false,
      userCity: {}
    }
  },

  mounted() {
    if (this.gottenCitites.length == 0) {
       geo()
        .then ( res => {
          let city = res.city.name
          axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${`${city}`}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
            .then(res => {
              console.log(geo)
              this.$store.dispatch('setCity', {city: city, weather: res.data})
            })
            .catch ( e => {
              console.log(e)
            })
        })
    }
    setInterval(() => {
      this.update()
    }, 3600000)
  },

  components: {
    Main,
    Choice
  },
  computed: {
    ...mapGetters({
        gottenCitites: 'getCity'
      })
  },
  methods: {
    openMenu() {
      this.open = !this.open
    },
    update() {
      let cities = [];
      this.gottenCitites.forEach(item => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${`${item.city}`}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
          .then(res => {
            cities.push({ city: `${item.city}`, weather: res.data })
          })
          .catch ( e => {
            console.log(e)
          })
      })
      this.$store.dispatch('commitUpdateList', cities)
    }
  }
};
</script>

<style src="./stylesheets/style.css">
</style>

