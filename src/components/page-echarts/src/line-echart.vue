<template>
  <div class="rose-echart">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

const props = defineProps({
  Label: {
    type: Array,
    default: () => ([])
  },
  LineData: {
    type: Array,
    default: () => ([])
  }
})

const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.Label
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.LineData,
        type: 'line',
        areaStyle: {}
      }
    ]
  };
})
</script>

<style scoped>
</style>
