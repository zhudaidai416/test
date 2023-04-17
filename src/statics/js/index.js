import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../../statics/css/public.less";
import axios from 'axios';
import VueRouter from 'vue-router';
import store from '../../store/vue-store.js';
import Qs from 'qs';

Vue.use(VueRouter);
Vue.use(ElementUI);

let http = axios.create({
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }]
});
export default http

import App from '../../pages/index/index.vue';
import test_1 from '../../pages/test_1/test_1.vue';
import test_2 from '../../pages/test_2/test_2.vue';
import test_3 from '../../pages/test_3/test_3.vue';
import test_4 from '../../pages/test_4/test_4.vue';
import test_5 from '../../pages/test_5/test_5.vue';

var routes = [
  { path: '/', redirect: '/test_1' },
  { path: '/test_1', name: 'test_1', component: test_1 },
  { path: '/test_2', name: 'test_2', component: test_2 },
  { path: '/test_3', name: 'test_3', component: test_3 },
  { path: '/test_4', name: 'test_4', component: test_4 },
  { path: '/test_5', name: 'test_5', component: test_5 },
]

var router = new VueRouter({
  routes
})

new Vue({
  el: "#main_manage",
  store,
  router,
  components: { App },
  template: '<App/>'
})