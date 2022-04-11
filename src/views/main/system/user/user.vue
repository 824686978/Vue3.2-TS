<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></page-search>
    </div>
    <div class="content">
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="users"
        ref="pageContentRef"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></page-content>
    </div>
    <div>
      <PageModal :defaultInfo="defaultInfo" :modalConfig="modalConfigRef" ref="pageModalRef" pageName="users"></PageModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalConfig } from './config/modal.config'

// PageSearch相关的hook逻辑
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

// PageModal相关的hook逻辑
// 动态确定是否显示密码表单
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = true
}
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(newCallback, editCallback)

// 动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  departmentItem!.options = store.state.entireDepartures.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = store.state.entireRole.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})




</script>

<style scoped lang="less">
</style>
