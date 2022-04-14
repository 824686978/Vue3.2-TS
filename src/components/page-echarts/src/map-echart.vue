<template>
  <div class="map-echart">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as echarts from 'echarts'
import BaseEchart from '@/base-ui/echart'
import { convertData } from '../utils/convert-data'

const props = defineProps({
  mapData: {
    type: Array,
    default: () => ([])
  }
})

const options = computed(() => {
  return {
    backgroundColor: "#fff",
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return params.name + " : " + params.value[2];
      },
    },
    legend: {
      orient: "vertical",
      right: 20,
      top: 10,
      data: ["销量"],
      textStyle: {
        color: "#fff",
      },
    },
    visualMap: {
      min: 0,
      max: 20000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"],
      },
      textStyle: {
        color: "#fff",
      },
    },
    geo: {
      map: "china",
      roam: "scale",
      itemStyle: {
        normal: {
          areaColor: "rgb(19, 91, 153)",
          borderColor: "rgb(9, 54, 95)",
        },
        emphasis: {
          areaColor: "#f4cccc",
          borderColor: 'rgb(9, 54, 95)'
        },
      },
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        symbolSize: 12,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            borderColor: '#fff',
            borderWidth: 1
          },
        },
        itemStyle: {
          emphasis: {
            borderColor: "#fff",
            borderWidth: 1,
          },
        },
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false,
        },
      },
    ],
  };
})
</script>

<style scoped>
</style>
