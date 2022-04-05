<template>
  <div class="page-search">
    <yj-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="info">
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

const formData = ref({
  id: 'id',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})

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
