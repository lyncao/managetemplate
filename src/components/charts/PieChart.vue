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
      let series = []
      let legend = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      let data = [335, 310, 234, 135, 1548]
      legend.forEach((item, index) => {
        series.push({
          value: data[index],
          name: item,
          itemStyle: {
            normal: {
              color: this.colors[index]

            }
          }
        })
      })
      let option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '',
          x: 'center',
          textStyle: {color: '#38828b'}
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: legend,
          textStyle: {color: '#38828b'}
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: series,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
