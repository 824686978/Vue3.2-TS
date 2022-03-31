<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号码" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="phone.Verification" />
          <el-button type="primary" class="get-btn">验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { rules } from '../config/phone-config'


const formRef = ref<InstanceType<typeof ElForm>>()
const store = useStore()
const phone = reactive({
  number: '',
  Verification: ''
})

const phoneAction = () => {
  // 验证ElForm是否通过，通过返回true
  formRef.value?.validate((valid) => {
    if (valid) {

      // 开始进行登录验证
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
  })
  console.log('开始登录')
}
defineExpose({ phoneAction })
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
