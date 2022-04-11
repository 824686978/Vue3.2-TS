import yjRequest from '@/service'

// 请求页面数据
export function getPageListData(url: string, queryInfo: any) {
  return yjRequest.post({
    url: url,
    data: queryInfo
  })
}

// 根据id删除对应数据  url: /users/id
export function deletePageData(url:string) {
  return yjRequest.delete({
    url
  })
}

// 新建用户
export function createPageData(url:string, newData: any) {
  return yjRequest.post({
    url,
    data: newData
  })
}

// 新建编辑
export function editPageData(url:string, editData: any) {
  return yjRequest.patch({
    url,
    data: editData
  })
}

