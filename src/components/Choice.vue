<template>
  <div class="main">
    <div class="display">
      <div v-for="(city, key) in cities" :key="key" class="display__item">
        {{city}}
      </div>
    </div>
    <div class="input-block">
      <input v-model="city" placeholder="Add city..." type="text">
      <button class="btn">Add</button>
    </div>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {
      cities: []
    }
  }
}
</script>

<style>

</style>