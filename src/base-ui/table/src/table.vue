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
    <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="40"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="60"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{ scope.row[propItem.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['selectionChange'])
const porps = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
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
  }
})

// 判断SelectionChange是否发生改变
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
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
    font-weight: 700;
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
