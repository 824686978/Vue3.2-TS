<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="isFold">
      <fold />
    </el-icon>
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="!isFold">
      <expand />
    </el-icon>
    <div class="content">
      <div>
        <yj-breadcrumb :breadcrumb="breadcrumb"></yj-breadcrumb>
      </div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import userInfo from './cpns/user-info.vue'
import YjBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'



const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

// 定义面包屑的数据
const store = useStore()
const route = useRoute()
const breadcrumb = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex: 1;
  }
}
</style>
