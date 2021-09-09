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
import Service from '@/api/service.js'
export default {
  data () {
    return {
      city: '',
      code: ''
    }
  },
  mounted: {
    weather () {
      Service.get('London', 'uk')
    }
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