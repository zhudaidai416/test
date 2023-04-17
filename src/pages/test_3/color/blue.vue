<template>
  <div class="blue" @click.stop="$emit('clickBlue')">
    <span>{{ parseInt(blue_num) }}</span>
    <green :green_num="green_num" :red_num="red_num" @clickGreen="clickGreen" @clickRed="clickRed"></green>
  </div>
</template>

<script>
import green from "./green.vue";
export default {
  name: "blue",
  components: {
    green
  },
  props: ['blue_num', 'green_num', 'red_num'],
  data() {
    return {

    }
  },
  methods: {
    clickGreen() {
      this.$emit('clickGreen');
    },
    clickRed() {
      this.$emit('clickRed');
    },
  },
}
</script>

<style scoped></style>