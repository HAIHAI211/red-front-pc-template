import { user as api } from '@/api'
import { SET_TOKEN } from '../mutation-types'
import { save, read } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: null
  },
  getters: {
    isLogin (state, getters) {
      return state.token || read(SET_TOKEN)
    }
  },
  mutations: {
    [SET_TOKEN] (state, payload) {
      state.token = payload.token
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const response = await api.login(payload) // api.login可以用mock来伪造
        console.log('response', response)
        const token = response.data.data.token // 这是伪代码
        commit(SET_TOKEN, {token})
        save(SET_TOKEN, token)
      } catch (e) {
        console.log('e', e)
      }
    }
  }
}
