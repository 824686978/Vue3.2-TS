<template>
  <div class="dashboard">
    <div ref="divRef" class="dashboard"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const divRef = ref<HTMLElement>()

onMounted(() => {
  const echartsInstance = echarts.init(divRef.value!)
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  echartsInstance.setOption(option)
})
</script>

<style scoped lang="less">
.dashboard {
  height: 500px;
  width: 500px;
}
</style>
