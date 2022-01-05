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
// import geo from '@/api/geo.js'
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
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${'Kassel'}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
        .then(res => {
          this.$store.dispatch('setCity', {city: 'Kassel', weather: res.data})
        })
        .catch ( e => {
          console.log(e)
        })
    }
    setInterval(() => {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${'Kassel'}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
        .then(res => {
          this.$store.dispatch('setCity', {city: 'Kassel', weather: res.data})
        })
        .catch ( e => {
          console.log(e)
        })
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
    }
  }
};
</script>

<style src="./stylesheets/style.css">
</style>

