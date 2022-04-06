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
          <el-button type="primary">
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

// 重置
const handleResetClick = () => {
 formData.value = formOriginData
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
