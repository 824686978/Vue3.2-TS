<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <avatar />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 是否保存密码
const isKeepPassword = ref(false)

// 调用子组件的登录按钮方法
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

// 判断是账号和手机登录
const currentTab = ref('account')

const handleLoginClick = () => {
  // 账号登录
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  }
  // 手机登录
  else {
    phoneRef.value?.phoneAction()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 130px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 5px;
  }
}
</style>
