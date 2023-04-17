<template>
  <div class="test-content">
    <div class="left-require">
      <div>
        <h2>请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）</h2>
        <h2>请求失败或报错时需要在右侧空白区域显示"请求失败"</h2>
        <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
      </div>
    </div>

    <div class="right-content">
      <button class="request-button" @click="request">点击发送请求</button>
      <div>
        <!--代码区域-->
        <h2>{{ reqData }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
//请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）
//请求失败或报错时需要在右侧空白区域显示"请求失败"
import axios from '../../statics/js/index'
export default {
  name: "test_5",
  data() {
    return {
      reqData: ''
    }
  },
  methods: {
    request() {
      axios({
        method: 'get',
        url: 'http://quan.suning.com/getSysTime.do'
      })
        .then((res) => {
          this.reqData = res.data;
        })
        .catch((err) => {
          this.reqData = '请求失败!';
        });
    }
  },

}
</script>

<style scoped>
h2 {
  margin: 0 20px;
}
</style>