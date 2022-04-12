import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import router from '@/router'
import localCache from '@/utils/cache'
import {
  mapMenusToRoutes,
  mapMenusToPermissions
} from '@/utils/map-menus'
import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    // 保存token到state
    changeToken(state, token) {
      state.token = token
    },

    //保存用户信息
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

    //保存用户菜单
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus

      // 注册路由 userMenus => routes
      // 获取所有的动态路由
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      // 保存按钮权限
      state.permissions = permissions
    }
  },
  getters: {},
  actions: {
    // 账号登录
    async accountLoginAction(
      { commit, dispatch },
      payload: IAccount
    ) {
      // 用户登录
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data

      commit('changeToken', token)
      // 本地缓存token
      localCache.setCache('token', token)

      // 发送初始化请求
      dispatch('getInitialDataAction', null, { root: true })

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)

      // 本地缓存用户信息
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult =
        await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)

      // 本地缓存用户菜单
      localCache.setCache('userMenus', userMenus)
      console.log(userMenus)

      // 跳到首页
      router.push('./main')
    },

    // 防止刷新，重新请求数据
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化请求
        dispatch('getInitialDataAction', null, {
          root: true
        })
      }
      // 将数据保存到本地
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },

    //手机登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('phoneLoginAction', payload)
    }
  }
}
export default loginModule
