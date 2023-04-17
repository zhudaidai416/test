<template>
  <div id="main_manage" style="height: 100%;width: 100%">
    <div class="navigate">
      <img class="logo" src="../../statics/img/logo.png" alt="logo">
      <ul class="nav1-list">
        <li class="nav1">
          <router-link tag="div" to="/test_1">测试一</router-link>
        </li>
        <li class="nav1">
          <router-link tag="div" to="/test_2">测试二</router-link>
        </li>
        <li class="nav1">
          <span>其他</span>
          <ul class="nav2-list">
            <li class="nav2">
              <router-link tag="div" to="/test_3">测试三</router-link>
            </li>
            <li class="nav2">
              <router-link tag="div" to="/test_4">测试四</router-link>
            </li>
            <li class="nav2">
              <router-link tag="div" to="/test_5">测试五</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//按照如图所示的样式和顺序，完善路由配置
export default {
  components: {

  },
  data() {
    return {

    };
  },
  mounted() {

  },
  computed: {

  },
  watch: {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigate {
  margin: 0;
  padding: 0;
  background-color: #2D313A;
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 999;
}

.logo {
  transform: scale(60%);
  margin: 0 20px;
}

.nav1-list {
  width: 50%;
  height: 80px;
  margin-left: 100px;
  color: white;
  display: flex;
  align-items: center;

  .nav1 {
    width: 20%;
    height: 80px;
    line-height: 80px;
    text-align: center;

    &:hover {
      background-color: #C89F67;
    }
  }
}



.nav2-list {
  display: none;
}

.nav1:hover>.nav2-list {
  display: block;
}

.nav2 {
  background-color: #C89F67;

  &:hover {
    background-color: #F0C181;
  }
}
</style>