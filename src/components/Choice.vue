<template>
  <div class="main">
    <div class="scroll">
      <draggable v-model="myList" class="display">
        <div
          v-for="(city, key) in myList"
          :key="key" class="display__item mt-5"
        >
          <div><img class="icon_small icon_drag" src="@/assets/svgs/drag.svg" alt=""></div>
          <div>{{city.city}}</div>
          <div><img @click="deleteCity(key)" class="icon_small icon_bin" src="@/assets/svgs/bin.svg" alt=""></div>
        </div>
      </draggable>
    </div>
    <div class="input-block mt">
      <input @keypress.enter="addCity(city)" v-model="city" placeholder="Add city..." type="text">
      <button @click="addCity(city)" class="btn btn_mLeft">Add</button>
    </div>
    <Alert class="modal" @hide="alert = false" v-if="alert"/>
  </div>
</template>

<script scoped>
import Alert from '@/components/Alert.vue'
import draggable from 'vuedraggable'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  components: {
    draggable,
    Alert
  },
  data () {
    return {
      city: '',
      alert: false
    }
  },
  computed: {
    myList: {
      get () {
        return this.gottenCitites
      },
      set(value) {
        this.$store.commit('updateList', value)
      }
    },
    ...mapGetters({
        gottenCitites: 'getCity'
      })
  },
  methods: {
    // makeFirst (x, y) {
    //   this.$store.dispatch('makeCityFirst', x, y)
    // },
    addCity (x) {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=d23058db742db7cb6fe57437bd010579`)
        .then(res => {
          this.$store.dispatch('setCity', {city: x, weather: res.data})
          this.$emit('close')
        })
        .catch ( e => {
          console.log(e)
          this.alert = true
        })
      this.city = ""
    },
    deleteCity (x) {
      this.$store.dispatch('deleteCity', x)
    }
  }
}
</script>

<style scoped>
.main {
  position: relative;
}

.scroll {
  overflow: hidden;
  border-radius: 20px;
}

.display::-webkit-scrollbar {
  width: 7px;
  border-radius: 10px;
}

.display::-webkit-scrollbar-thumb {
  background: #3399FF;
  border-radius: 20px;
}

.display__item:hover {
  background: #E0E0E0;
  cursor: grab;
}

.display__item:last-child {
  margin-bottom: 5px;
}

.icon_drag {
  cursor: grab;
  margin-left: 15px;
}

.icon_bin {
  margin-right: 15px;
  z-index: 10;
}

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>