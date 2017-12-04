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
      var colorList = this.colors
      let
        option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
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
