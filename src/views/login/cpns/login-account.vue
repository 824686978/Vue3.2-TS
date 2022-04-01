<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'

const store = useStore()
const account = reactive({
  name: LocalCache.getCache('name') ?? '',
  password: LocalCache.getCache('password') ?? ''
})
// 验证ElForm是否通过
const formRef = ref<InstanceType<typeof ElForm>>()
// 登录逻辑
const loginAction = (isKeepPassword: any) => {
  // 验证ElForm是否通过，通过返回true
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否要记住密码
      if (isKeepPassword) {
        // 本地缓存
        LocalCache.setCache('name', account.name)
        LocalCache.setCache('password', account.password)
      } else {
        // 未点击记住密码将删除原来保存的密码
        LocalCache.deleteCache('name')
        LocalCache.deleteCache('password')
      }
      // 开始进行登录验证
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
  console.log('开始登录')
}

defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>
