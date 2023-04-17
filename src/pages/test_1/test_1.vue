<template>
  <div class="tip-content">
    <img src="../../statics/img/navigate.png" alt="">
    <h2>按照如图所示的样式和顺序，完善页面顶部路由导航配置</h2>
    <h2>测试二显示组件test_2.vue，一直到test_5.vue</h2>
    <button @click="Toform">跳转表单</button>
    <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
  </div>
</template>

<script>
//按照如图所示的样式和顺序，完善路由导航配置
//选择测试二显示组件test_2.vue，一直到test_5.vue
export default {
  name: "test_1",
  methods: {
    Toform() {
      this.$router.push('/test_2');
    }
  },
}
</script>

<style scoped></style>