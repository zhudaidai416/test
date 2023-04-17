<template>
  <div class="blue">
    <span>{{ num }}</span>
    <green></green>
  </div>
</template>

<script>
import green from "./green.vue";
export default {
  name: "blue",
  components: {
    green
  },
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped></style>