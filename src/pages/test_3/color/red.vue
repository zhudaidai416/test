<template>
  <div class="red" @click.stop="$emit('clickRed')">
    <span>{{ red_num }}</span>
  </div>
</template>

<script>
export default {
  name: "red",
  props: ['red_num'],
  data() {
    return {
      
    }
  }
}
</script>

<style scoped></style>