<template>
  <div class="main">
    <div class="scroll">
      <div class="display">
        <div v-for="(city, key) in this.gottenCitites" :key="key" class="display__item mt-5">
          <img class="icon_small icon_drag" src="@/assets/svgs/drag.svg" alt="">
          {{city}}
          <img @click="deleteCity(key)" class="icon_small" src="@/assets/svgs/bin.svg" alt="">
        </div>
      </div>
    </div>
    <div class="input-block mt">
      <input @keypress.enter="addCity(city)" v-model="city" placeholder="Add city..." type="text">
      <button @click="addCity(city)" class="btn btn_mLeft">Add</button>
    </div>
  </div>
</template>

<script scoped>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      city: ''
    }
  },
  computed: {
    ...mapGetters({
        gottenCitites: 'getCity'
      })
  },
  methods: {
    addCity (x) {
      this.$store.dispatch('setCity', x)
      this.city = ""
    },
    deleteCity (x) {
      this.$store.dispatch('deleteCity', x)
    }
  }
}
</script>

<style scoped>
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

.display::-webkit-scrollbar-button {
  background: #3399FF;
}

.display__item:first-child {
  margin-top: 0;
}

.icon_drag {
  cursor: grab;
}
</style>