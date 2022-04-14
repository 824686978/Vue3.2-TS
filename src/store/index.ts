import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
import system from './main/system/system'
import dashboard from './analysis/dashboard'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      // 部门
      entireDepartures: [],
      // 角色
      entireRole: [],
      // 菜单
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartures(state, list) {
      state.entireDepartures = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
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

      // 请求菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      // 保存数据
      commit('changeEntireDepartures', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})
export function setupStore() {
  // 防止刷新，重新请求数据
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export default store
