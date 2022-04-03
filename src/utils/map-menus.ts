// 路由映射
import { RouteRecordRaw } from 'vue-router'
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载默认的所有routes
  const allRoutes: RouteRecordRaw[] = []
  // 遍历所有/router/main下的ts文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {

    // 对路径进行切割
    const route = require('../router/main' + key.split('.')[1])
    // 就路由注册全部路由
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 匹配对应路由
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          // 把匹配的路由加入routes
          routes.push(route)
        }
      } else {
        // 递归调用函数
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
