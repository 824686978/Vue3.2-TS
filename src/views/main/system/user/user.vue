<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></page-search>
    </div>
    <div class="content">
      <page-content :contentTableConfig="contentTableConfig" pageName="users" ref="pageContentRef"></page-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'


const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()



</script>

<style scoped lang="less">
</style>
