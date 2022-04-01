<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="isFold">
      <fold />
    </el-icon>
    <el-icon class="fold-menu" @click="handleFoldClick" v-if="!isFold">
      <expand />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
