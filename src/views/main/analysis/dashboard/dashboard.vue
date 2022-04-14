<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <yj-card title="分类商品的数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </yj-card>
      </el-col>
      <el-col :span="10">
        <yj-card title="不同城市的商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </yj-card>
      </el-col>
      <el-col :span="7">
        <yj-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </yj-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <yj-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </yj-card>
      </el-col>
      <el-col :span="12">
        <yj-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </yj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import YjCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')
// 饼图数据和玫瑰图数据
const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return {
      name: item.name, value: item.goodsCount
    }
  })
})

// // 不同商品销量数据
const categoryGoodsSale = computed(() => {
  const Label: string[] = []
  const LineData: any[] = []
  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    Label.push(item.name)
    LineData.push(item.goodsCount)
  }
  return { Label, LineData }
})

// 不同商品的收藏
const categoryGoodsFavor = computed(() => {
  const xLabel: string[] = []
  const BarData: any[] = []
  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabel.push(item.name)
    BarData.push(item.goodsFavor)
  }
  return { xLabel, BarData }
})

// // 不同商品销量数据
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return {
      name: item.address, value: item.count
    }
  })
})

</script>

<style scoped lang="less">
.row {
  margin-top: 20px;
}
</style>
