import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    // 获取数据
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    // 获取数据
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    // 请求页面数据
    async getPageListAction({ commit }, payload: any) {
      // 动态获取页面数据的url
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 发送网络请求获取页面数据
      const pageResult = await getPageListData(
        pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data

      // 转换首字母大写
      const changePageName =
        pageName.slice(0, 1).toUpperCase() +
        pageName.slice(1)

      // 修改 state的数据
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
      // 请求页面信息
      // async getPageListAction({ commit }, payload) {
      //   // 获取url
      //   const pageName = payload.pageUrl
      //   let pageUrl = ''
      //   switch (pageName) {
      //     case 'user':
      //       pageUrl = 'users/list'
      //       break
      //     case 'role': {
      //       pageUrl = 'role/list'
      //       break
      //     }
      //   }

      //   // 发生网络请求数据
      //   const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      //   const { list, totalCount } = pageResult.data
      //   console.log(pageResult)

      //   switch (pageName) {
      //     case 'user':
      //       // 修改state的数据
      //       commit(`changeUserList`, list)
      //       commit(`changeUserCount`, totalCount)
      //       break
      //     case 'role': {
      //       commit(`changeRoleList`, list)
      //       commit(`changeRoleCount`, totalCount)
      //       break
      //     }
      //   }

      // // 修改state的数据
      // commit(`change${pageName}List`, list)
      // commit(`change${pageName}Count`, totalCount)
    },
    // 删除请求
    async deletePageDataAction({ dispatch }, payload) {
      // 1.获取pageName和id
      const { pageName, id } = payload
      // 2.根据pageName和id拼接url
      const pageUrl = `/${pageName}/${id}`
      // 3.根据urlfa's
      await deletePageData(pageUrl)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 新建请求
    async createPageDataAction({ dispatch }, payload) {
      // 得到数据
      const { pageName, newData } = payload
      // 拼接url
      const pageUrl = `/${pageName}`
      // 发送网络请求
      await createPageData(pageUrl, newData)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 编辑请求
    async editPageDataAction({ dispatch }, payload) {
      // 得到数据
      const { pageName, editData, id } = payload
      // 拼接url
      const pageUrl = `/${pageName}/${id}`
      // 发送网络请求
      await editPageData(pageUrl, editData)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
