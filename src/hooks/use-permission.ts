import { useStore } from 'vuex'

// 判断用户是否有对应的按钮权限
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions

  const verifyPermission = `system:${pageName}:${handleName}`
  return permissions.find((item: any) => item === verifyPermission)
}
