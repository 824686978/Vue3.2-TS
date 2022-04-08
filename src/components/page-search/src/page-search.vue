<template>
  <div class="page-search">
    <yj-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="info" @click="handleResetClick">
            <el-icon>
              <refresh />
            </el-icon>重置
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <el-icon>
              <search />
            </el-icon>搜索
          </el-button>
        </div>
      </template>
    </yj-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YjForm from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true,
  }
})

// 动态获取配置文件的field
const formItems = props.searchFormConfig.formItems
const formOriginData = {}
for(const item of formItems) {
  formOriginData[item.field] = ''
}
// 动态设置formData
const formData = ref(formOriginData)

// 定义重置和搜索事件
const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])
// 重置
const handleResetClick = () => {
  // 对数据的浅拷贝进行赋值
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
  }
  emit('resetBtnClick')
}

// 搜索
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}

</script>

<style scoped lang="less">
.header {
  color: red;
}
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
