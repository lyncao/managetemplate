<template>
  <div class="chart" :id="chartId">

  </div>
</template>
<script>
  export default {
    name: 'linechart',
    props: ['xAxisdata', 'chartId', 'colors'],
    mounted () {
      let myChart = this.$echarts.init(document.getElementById(this.chartId))
      let legend = ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      let series = []
      let data = [[120, 132, 101, 134, 90, 230, 210], [220, 182, 191, 234, 290, 330, 310],
        [150, 232, 201, 154, 190, 330, 410], [320, 332, 301, 334, 390, 330, 320], [820, 932, 901, 934, 1290, 1330, 1320]]
      legend.forEach((item, index) => {
        series.push({
          name: item,
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: this.colors[index]
            }
          },
          data: data[index]
        })
      })
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend,
          textStyle: {color: '#38828b'}
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          show: false
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: series
      }
      myChart.setOption(option)
    }
  }
</script>
<style scoped>
  .chart {
    width: 500px;
    height: 300px;
  }
</style>
