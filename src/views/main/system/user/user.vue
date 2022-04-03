<template>
  <div class="user">
    <div class="search">
      <yj-form
        v-bind="searchFormConfig"
      ></yj-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import YjForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

</script>

<style scoped>
</style>
