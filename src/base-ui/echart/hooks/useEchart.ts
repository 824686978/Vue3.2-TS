import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import ChinaMapData from '../data/china.json'

// 注册地图
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }
  const updateResize = () => {
    echartInstance.resize()
  }

  // 监听浏览器宽度的变化让echart跟随变化
  window.addEventListener('resize', () =>
    echartInstance.resize()
  )

  return {
    echartInstance,
    setOptions,
    updateResize
  }
}
