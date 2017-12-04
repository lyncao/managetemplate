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
      let legend = ['展现', '点击', '访问', '咨询', '订单']
      let data = [60, 40, 20, 80, 100]
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
          text: '漏斗图',
          subtext: '',
          textStyle: {color: '#38828b'}
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          },
          show: false
        },
        legend: {
          data: legend,
          textStyle: {color: '#38828b'}
        },
        calculable: true,
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: series
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
