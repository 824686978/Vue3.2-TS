import yjRequest from "../index"
import { IAccount, ILoginResult, IDataType } from '@/service/login/types'

enum loginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

// 用户登录
export function accountLoginRequest(account: IAccount) {
  return yjRequest.post<IDataType<ILoginResult>>({
    url: loginApi.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfoById(id: number) {
  return yjRequest.get({
    url: loginApi.LoginUserInfo + id
  })
}

// 请求用户菜单
export function requestUserMenusByRoleId(id: number) {
  return yjRequest.get({
    url: loginApi.UserMenus + id + '/menu'
  })
}

