<template>
  <div class="yj-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange" v-bind="childrenProps">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="40"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="60"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{ scope.row[propItem.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer" v-if="showFooter">
        <el-pagination
          v-model:currentPage="pageInfo.currentPage"
          v-model:page-size="pageInfo.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Object,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  pageInfo: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  // 接收菜单是否需要展开
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  // 是否展示分页器
  showFooter: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])
// 判断SelectionChange是否发生改变
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}

// 监听分页器数量的改变
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.pageInfo, pageSize })
}

// 监听分页器页码的改变
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.pageInfo, currentPage })
}


</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  padding-bottom: 20px;
  padding-left: 550px;
}
</style>
