<template>
  <div class="main main_modal">
    <div
      class="text text_modal"
      v-text="`City not found!`"
    />
    <button
      v-text="`Ok`"
      class="mt"
      @click="$emit('hide')"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main_modal {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.text_modal {
  font-size: 35px;
}
</style>