<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        {{ name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="CircleCloseFilled" @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided icon="Avatar">用户信息</el-dropdown-item>
          <el-dropdown-item icon="Platform">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

const store = useStore()

const name = computed(() => store.state.login.userInfo.name)

const router = useRouter()
// 退出登录
const handleExitClick = () => {
  localCache.deleteCache('token')
  router.push('/main')
}

</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
