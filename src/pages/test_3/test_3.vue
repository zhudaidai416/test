<template>
  <div class="color-reck">
    <div>
      <blue :blue_num='blue_num' :green_num='green_num' :red_num='red_num' @clickBlue="clickBlue" @clickGreen="clickGreen"
        @clickRed="clickRed"></blue>
    </div>
    <h2>记录每种颜色区域的点击次数和点击数值，其中点击次数为各颜色区域的直接点击次数（点击红色区域时，蓝色区域和绿色区域的数值不变）</h2>
    <h2>点击数值计算规则：直接点击各颜色区域时点击数值+1，然后其下级点击数值需要+2，反之直接点击各颜色区域2次，其父级的点击数值需+1；实时更新界面上的点击数值</h2>
    <h2>例如:每点击蓝色区域 1 次，绿色区域点击数值需要+2，红色区域点击数值需要+4</h2>
    <h2>例如:每点击红色区域 4 次，绿色区域点击数值需要+2，蓝色区域点击数值需要+1</h2>
    <h2>不得新增或者删除本页面组件，不得使用vuex</h2>
    <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
  </div>
</template>

<script>
//记录每种颜色区域的点击次数和点击数值，其中点击次数为各颜色区域的直接点击次数（点击红色区域时，蓝色区域和绿色区域的数值不变）
//点击数值计算规则：直接点击各颜色区域时点击数值+1，然后其下级点击数值需要+2，
// 1、每点击蓝色区域 1 次，绿色区域点击数值需要+2，红色区域点击数值需要+4
// 2、每点击红色区域 4 次，绿色区域点击数值需要+2，蓝色区域点击数值需要+1
//不得新增或者删除本页面组件，不得使用vuex
import blue from "./color/blue.vue";
export default {
  name: "test_3",
  components: {
    blue
  },
  data() {
    return {
      blue_num: 0,
      green_num: 0,
      red_num: 0
    }
  },
  methods: {
    clickBlue() {
      this.blue_num = this.blue_num + 1
      this.green_num = this.green_num + 2
      this.red_num = this.red_num + 4
    },
    clickGreen() {
      this.blue_num = this.blue_num + 0.5
      this.green_num = this.green_num + 1
      this.red_num = this.red_num + 2
    },
    clickRed() {
      this.blue_num = this.blue_num + 0.25
      this.green_num = this.green_num + 0.5
      this.red_num = this.red_num + 1
    },
  },
}
</script>

<style scoped></style>