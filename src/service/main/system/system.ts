import yjRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return yjRequest.post({
    url: url,
    data: queryInfo
  })
}
