<!--交易额趋势-->
<template>
  <div class="p-turnover-trend">
    <div class="p-trend-chart"
         ref="trendChart"
    ></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
  name: '',
  components: {},
  data() {
    return {
      chart: null,
      isFinished: false
    }
  },
  created() {
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.trendChart)

      var dataArr = 60;
      const data = []
      if (data == undefined) {
        dataArr = 0;
      }

      var option = {
        backgroundColor: "#FFFFFF",
        title: {
          show: true,
          text: '任务进度',
          x: '50%',
          y: '57%',
          z: 8,
          textAlign: 'center',
          textStyle: {
            color: '#f1f7fe',
            fontSize: 20,
            fontWeight: 'normal'
          },

        },
        series: [{
          name: "内部（环形）进度条",
          type: "gauge",
          // center: ['20%', '50%'],
          radius: '60%',
          splitNumber: 10,
          axisLine: {
            lineStyle: {
              color: [
                [dataArr / 100, '#458EFD'],
                [1, "#FFFFFF"]
              ],
              width: 14
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,

          },
          splitLine: {
            show: false,
          },
          pointer: {
            show: false,
          },
        },
          {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              // 仪表盘刻度线
              lineStyle: {
                width: 2,
                color: [
                  [1, '#FFFFFF']
                ]
              }
            },
            //仪表盘文字
            axisLabel: {
              show: true,
              color: '#868FDF',
              distance: 25,
              formatter: function(v) {
                switch (v + '') {
                  case '0':
                    return '0';
                  case '10':
                    return '10';
                  case '20':
                    return '20';
                  case '30':
                    return '30';
                  case '40':
                    return '40';
                  case '50':
                    return '50';
                  case '60':
                    return '60';
                  case '70':
                    return '70';
                  case '80':
                    return '80';
                  case '90':
                    return '90';
                  case '100':
                    return '100';
                }
              }
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: '#3082FE', //用颜色渐变函数不起作用
                width: 2,
              },
              length: -8
            }, //刻度样式
            splitLine: {
              show: true,
              length: -20,
              lineStyle: {
                color: '#458EFD', //用颜色渐变函数不起作用
              }
            }, //分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          /*内部*/
          {
            type: 'pie',
            radius: ['0', '40%'],
            center: ['50%', '50%'],
            z: 8,
            hoverAnimation: false,
            data: [{
              name: '检查进度',
              value: dataArr,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3398ff'
                  }, {
                    offset: 1,
                    color: '#7db0fd'
                  }])
                }

              },
              label: {
                normal: {
                  formatter: function(params) {
                    return params.value + '%';
                  },
                  color: '#FFFFFF',
                  fontSize: 54,
                  fontWeight: "bold",
                  position: 'center',
                  show: true
                }
              },
              labelLine: {
                show: false
              }
            }],
          },
          /*外一层*/
          {
            type: "pie",
            radius: "45%",
            startAngle: 220,
            endAngle: -40,
            hoverAnimation: false,
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 1,
              itemStyle: {
                normal: {
                  color: '#8DC4FD'
                }
              }
            }],
          },
          //外二层圈
          {
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            z: 0,
            hoverAnimation: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [{
              "value": 1,
              itemStyle: {
                normal: {
                  color: '#e3edf8'
                }
              }
            }]
          }
        ]
      };

      this.chart.setOption(option)

      this.chart.on('finished', _=>{
        if(!this.isFinished){
          this.isFinished = true
          this.chart.resize()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.p-turnover-trend {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .p-trend-chart{
    height: calc(100% - 21px);
    border: solid 1px red;
  }
}
</style>
