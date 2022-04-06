<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <PageContent :contentTableConfig="contentTableConfig" pageName="role"></PageContent>
  </div>
</template>

<script setup lang="ts">

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped>
</style>
