<template>
  <div class="green">
    <span>{{ num }}</span>
    <red></red>
  </div>
</template>

<script>
import red from "./red.vue";
export default {
  name: "green",
  components: {
    red
  },
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped></style>