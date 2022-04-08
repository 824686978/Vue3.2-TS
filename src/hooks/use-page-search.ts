import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  // 定义子组件传过来的对象
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // 重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  // 搜索
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
