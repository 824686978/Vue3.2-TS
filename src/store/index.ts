import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      // 部门
      entireDepartures: [],
      // 角色
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartures(state, list) {
      state.entireDepartures = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求角色数据和部门数据
      const departmentResult = await getPageListData(
        'department/list',
        {
          offset: 0,
          size: 1000
        }
      )
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // 保存数据
      commit('changeEntireDepartures', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  // 防止刷新，重新请求数据
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export default store
