<template>
  <div class="green" @click.stop="$emit('clickGreen')">
    <span>{{ parseInt(green_num) }}</span>
    <red :red_num="red_num" @clickRed="clickRed"></red>
  </div>
</template>

<script>
import red from "./red.vue";
export default {
  name: "green",
  components: {
    red
  },
  props: ['green_num', 'red_num'],
  data() {
    return {

    }
  },
  methods: {
    clickRed() {
      this.$emit('clickRed');
    }
  },
}
</script>

<style scoped></style>