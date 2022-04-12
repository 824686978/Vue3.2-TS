<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadcrumb } from '../types'

const props = defineProps({
  breadcrumb: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped>
</style>
