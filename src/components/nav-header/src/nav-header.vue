<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="isFold">
      <fold />
    </el-icon>
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="!isFold">
      <expand />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userInfo from './cpns/user-info.vue';

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

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
