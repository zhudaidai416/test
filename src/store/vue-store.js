import Vue from 'vue'
import Vuex from 'vuex'
//vuex参数放在此处统一管理
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stuDate: {
      stuName: '',
      cardId: '',
      tel: '',
      sex: '',
      nation: '',
      start_date: '',
      end_date: '',
      course: [],
      note: '',
    },
  },
  mutations: {
    changeStuDate(state, payload) {
      console.log('payload', payload);
      state.stuDate = { ...payload };
    },
  }
})

export default store