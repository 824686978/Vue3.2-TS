<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig" pageName="role" @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"></page-content>
    <page-modal :modalConfig="modalConfig" pageName="role" :defaultInfo="defaultInfo" ref="pageModalRef"
      :otherInfo="otherInfo">
      <el-tree ref="elTreeRef" :data="menus" show-checkbox node-key="id"
        :props="{ children: 'children', label: 'name' }" @check="handleCheckChange" />
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';
import { useStore } from 'vuex'
import { ElTree } from 'element-plus'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import pageModal from '@/components/page-modal';
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { menuMapLeafKeys } from '@/utils/map-menus'


const elTreeRef = ref<InstanceType<typeof ElTree>>()
// 处理pageModal的hook
// 编辑按钮回显
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList)
  nextTick(() => {
    console.log(elTreeRef.value, '123')
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(undefined, editCallback)

const store = useStore()
// 菜单数据
const menus = computed(() => store.state.entireMenu)
// 对话框菜单数据
const otherInfo = ref()

const handleCheckChange = (item, value) => {
  const checkedKeys = value.checkedKeys
  const halfCheckedKeys = value.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped>
</style>
