<template>
  <div class="page-content">
    <yj-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 头部插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">新建用户</el-button>
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
      <template #handle="scope">
        <div class="handle-btn">
          <el-button type="text" icon="Edit" size="small" v-if="isUpdate" @click="handleEditClick(scope.row)">编辑</el-button>
          <el-button type="text" icon="Delete" size="small" v-if="isDelete" @click="handleDeleteClick(scope.row)">删除</el-button>
        </div>
      </template>
      <!-- 动态插入剩余插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </yj-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import YjTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

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
// 动态获取操作的权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })

watch(pageInfo, () => getPageData())

// 请求用户信息
const store = useStore()
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
// 获取用户信息
const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))

// 获取用户人数
const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))

// 获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig.propList.filter(item => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handle') return false
  return true

})

// 监听删除操作
const handleDeleteClick = (item: any) => {
  store.dispatch('system/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id
  })
}
const emit = defineEmits(['newBtnClick', 'editBtnClick'])

// 监听新建用户
const handleNewClick = () => {
  emit('newBtnClick')
}

// 监听编辑按钮
const handleEditClick = (item: any) => {
  emit('editBtnClick', item)
}

// 暴露
defineExpose({ getPageData })
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
