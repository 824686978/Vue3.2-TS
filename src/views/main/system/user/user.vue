<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
    <div class="content">
      <yj-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable }}</el-button>
        </template>
        <template #createAt="scope">
          {{ scope.row.createAt }}
        </template>
        <template #updateAt="scope">
          {{ scope.row.updateAt }}
        </template>
      </yj-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import YjTable from '@/base-ui/table'

// 请求用户信息
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)
const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' }

]
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
