<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="style"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, PropType, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  style: {
    type: Object,
    default: () => ({ width: '100%', height: '360px' })
  }
})
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => { setOptions(props.options) })

})


</script>

<style scoped lang="less">
</style>
