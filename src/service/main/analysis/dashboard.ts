import yjRequest from '@/service'

enum DashboardAPI {
  // 商品分类数据个数
  categoryGoodsCount = '/goods/category/count',
  // 不同商品销量
  categoryGoodsSale = '/goods/category/sale',
  // 不同商品的收藏
  categoryGoodsFavor = '/goods/category/favor',
  // 不同城市商品销量
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return yjRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return yjRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return yjRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return yjRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}


