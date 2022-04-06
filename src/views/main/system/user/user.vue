<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
    <div class="content">
      <page-content :contentTableConfig="contentTableConfig" pageName="users"></page-content>
    </div>
  </div>
</template>

<script setup lang="ts">

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'




</script>

<style scoped lang="less">
</style>
