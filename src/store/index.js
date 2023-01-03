import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    page: null,
    isShowModal: false,
    modal: null
  },
  getters: {
  },
  mutations: {
    CHANGE_STATE(state,payload) {
      state[payload.key] = payload.body
    },
    CHANGE_MODAL(state, payload) {
      state.isShowModal = payload
    }
  },
  actions: {
    async get_request({commit}, payload) {
      try {
        let res = await axios.get(payload.request)
        payload.body = res.data
        commit('CHANGE_STATE', payload)
      } catch(err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
