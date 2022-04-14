import { Module } from 'vuex'

import { IDashboardState } from './types'
import { IRootState } from '../types'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> =
  {
    namespaced: true,
    state() {
      return {
        // 商品分类数据个数
        categoryGoodsCount: [],
        // 不同商品销量
        categoryGoodsSale: [],
        // 不同商品的收藏
        categoryGoodsFavor: [],
        // 不同城市商品销量
        addressGoodsSale: []
      }
    },
    mutations: {
      changeCategoryGoodsCount(state, list) {
        state.categoryGoodsCount = list
      },
      changeCategoryGoodsSale(state, list) {
        state.categoryGoodsSale = list
      },
      changeCategoryGoodsFavor(state, list) {
        state.categoryGoodsFavor = list
      },
      changeAddressGoodsSale(state, list) {
        state.addressGoodsSale = list
      }
    },
    actions: {
      async getDashboardDataAction({ commit }) {
        const categoryCountResult = await getCategoryGoodsCount()
        commit('changeCategoryGoodsCount', categoryCountResult.data)
        const categorySaleResult = await getCategoryGoodsSale()
        commit('changeCategoryGoodsSale', categorySaleResult.data)
        const categoryFavorResult = await getCategoryGoodsFavor()
        commit('changeCategoryGoodsFavor', categoryFavorResult.data)
        const addressGoodsSaleResult = await getAddressGoodsSale()
        commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
      }
    }
  }

export default dashboardModule
