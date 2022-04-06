<template>
  <div class="page-content">
    <yj-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 头部插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>

      <!-- 列的插槽 -->
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          size="small"
          round
          plain
        >{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">{{ $filters.formatTime(scope.row.createAt) }}</template>
      <template #updateAt="scope">{{ $filters.formatTime(scope.row.updateAt) }}</template>
      <template #handle>
        <div class="handle-btn">
          <el-button type="text" icon="Edit" size="small">编辑</el-button>
          <el-button type="text" icon="Delete" size="small">删除</el-button>
        </div>
      </template>
    </yj-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import YjTable from '@/base-ui/table'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true,
  },
  pageName: {
    type: String,
    required: true
  }
})
// 请求用户信息
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
// 获取用户信息
const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))

// 获取用户人数
// const userCount = computed(() => store.state.system.userCount)


</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
