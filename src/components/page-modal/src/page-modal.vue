<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <span>
        <yj-form v-model="formData" v-bind="modalConfig"></yj-form>
        <slot></slot>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import YjForm from '@/base-ui/form'
import { ref, watch } from 'vue'

const props = defineProps({
  // 表单数据
  modalConfig: {
    type: Object,
    required: true,
  },
  // 接受父组件传过来的编辑按钮的值
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  // 定义其余传参数据 // role的对话框数据
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})
// 判断对话框是否显示
const dialogVisible = ref(false)
// 定义输入框的值
const formData = ref({})
// 监听输入框的变化
watch(() => props.defaultInfo, (newValue) => {
  for (const item of props.modalConfig.formItems) {
    formData.value[`${item.field}`] = newValue[`${item.field}`]
  }
})
const store = useStore()
// 点击确定确定按钮的逻辑
const handleConfirmClick = () => {
  dialogVisible.value = false
  // 判断是新建还是编辑
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    // 新建
    store.dispatch('system/createPageDataAction',{
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}

defineExpose({ dialogVisible })
</script>

<style scoped>
</style>
