class LocalCache {

  // 保存数据
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }


  // 获取数据
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }


  //删除数据
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }


  //清空数据
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
