<template>
  <div id="app">
    <Main/>
    <div style="height: 20px;" />
    <Choice/>
  </div>
</template>

<script>
import Choice from '@/components/Choice.vue'
import Main from '@/components/Main.vue'
export default {
  name: "App",
  components: {
    Main,
    Choice
  }
};
</script>

<style src="@/stylesheets/style.css">
</style>
