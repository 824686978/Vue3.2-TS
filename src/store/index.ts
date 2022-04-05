import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {

  // 防止刷新，重新请求数据
  store.dispatch('login/loadLocalLogin')
}

export default store
