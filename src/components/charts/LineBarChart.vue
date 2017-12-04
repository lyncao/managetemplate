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
      let legend = ['蒸发量', '降水量', '平均温度']
      let series = []
      let data = [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]]
      legend.forEach((item, index) => {
        series.push({
          name: item,
          type: 'bar',
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
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#38828b'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          },
          show: false
        },
        legend: {
          data: legend,
          textStyle: {color: '#38828b'}
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: series
      }
      myChart.setOption(option)
    }
  }
</script>
<style scoped>
  .chart {
    width: 1020px;
    height: 300px;
  }
</style>
