<template>
  <div class="content-panel">
    <div class="panel-box">
      <div class="panel-item">
        <div class="page-title">折线图</div>
        <LineChart :chartId="'chart1'" :colors="chartColors"></LineChart>
      </div>
      <div class="panel-item">
        <div class="page-title">混合图</div>
        <line-bar-chart :chartId="'chart2'" :colors="chartColors"></line-bar-chart>
      </div>
      <div class="panel-item">
        <div class="page-title">柱状图</div>
        <bar-chart :chartId="'chart3'" :colors="chartColors"></bar-chart>
      </div>
      <div class="panel-item">
        <div class="page-title">漏斗图</div>
        <funnel-chart :chartId="'chart4'" :colors="chartColors"></funnel-chart>
      </div>
      <div class="panel-item">
        <div class="page-title">饼图</div>
        <pie-chart :chartId="'chart6'" :colors="chartColors"></pie-chart>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChart from '../../components/charts/LineChart.vue'
  import LineBarChart from '../../components/charts/LineBarChart.vue'
  import BarChart from '../../components/charts/BarChart.vue'
  import PieChart from '../../components/charts/PieChart.vue'
  import MapChart from '../../components/charts/MapChart.vue'
  import FunnelChart from '../../components/charts/FunnelChart.vue'

  export default {
    name: 'chartpage',
    data () {
      return {chartColors: ['#38828b', '#57a298', '#d3d3a2', '#f5c79b', '#f05b60', '#47697c', '#f5a091']}
    },
    components: {
      LineChart,
      LineBarChart,
      BarChart,
      PieChart,
      MapChart,
      FunnelChart
    }
  }
</script>
