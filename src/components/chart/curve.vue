<template>
  <div :id="randomString()" style="height: 100%"></div>
</template>

<script>
export default {
  name: "curve",
  components: {},
  props: {
    color: {
      type: Array,
      default: () => ["#3688FF", "#EAE25A"],
    },
    grid: {
      type: Array,
      default: () => [0, 0, 0, 0],
    },
    legend: {
      type: Object,
      default: () => {},
    },
    xname: {
      type: String,
      default: "",
    },
    xdata: {
      type: Array,
      default: () => [],
    },
    yname: {
      type: Array,
      default: () => [],
    },
    ydata: {
      type: Array,
      default: () => [],
    },
    ydataTwo: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartId: "",
    };
  },
  mounted() {
    this.getOption();
  },
  computed: {},
  watch: {
    // ydata(newVal) {
    //   this.getOption();
    // },
  },
  methods: {
    randomString() {
      var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz";
      var maxPos = $chars.length;
      var pwd = "";
      for (let i = 0; i < 8; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      this.chartId = pwd;
      return pwd;
    },
    getOption() {
      let chart = this.$echarts.init(document.getElementById(this.chartId));
      // let max = Math.ceil(Math.max.apply(Math, this.ydata.map((item) => { return item }))) + 5
      // let maxTwo = Math.ceil(Math.max.apply(Math, this.ydataTwo.map((item) => { return item }))) + 5
      // max = Math.max(max, maxTwo)
      let options = {
        tooltip: {
          trigger: "axis",
          padding: [10, 17],
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          textStyle: {
            color: "#52607D",
          },
          axisPointer: {
            lineStyle: {
              color: "rgba(78,82,155, 0.2)",
              type: "dashed",
            },
          },
        },
        // legend:this.legend,
        // legend: {
        //   bottom: 0,
        // },
        grid: {
          top: this.grid[0] || 0,
          right: this.grid[1] || 0,
          bottom: this.grid[2] || 0,
          left: this.grid[3] || 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          name: this.xname,
          boundaryGap: 0,
          nameTextStyle: {
            color: "#52607D",
            fontSize: 12,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#52607D",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            // show: true,
            lineStyle: {
              color: "rgba(101, 197, 231, 0.1)",
              type: "dashed",
            },
          },
          minorTick: {
            // show: true
          },
          minorSplitLine: {
            // show: true,
            lineStyle: {
              color: "rgba(101, 197, 231, 0.1)",
            },
          },
          data: this.xdata,
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#52607D",
            fontSize: 12,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#52607D",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(78,82,155, 0.2)",
              type: "dashed",
            },
          },
          minorTick: {
            show: false,
          },
          minorSplitLine: {
            // show: true,
            lineStyle: {
              color: "rgba(101, 197, 231, 0.1)",
            },
          },
        },
        series: [
          {
            name: "进",
            data: this.ydataTwo,
            type: "line",
            smooth: true,
            // symbol: "none",
            showSymbol: false,
            lineStyle: {
              color: this.color[0],
              width: 4,
              opacity: 1,
            },
            itemStyle: {
              color: this.color[0],
              borderWidth: 2,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(73,119,230, 0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(73,119,230, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
                // shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
          {
            name: "出",
            data: this.ydata,
            type: "line",
            smooth: true,
            showSymbol: false,
            // symbol: "none",
            lineStyle: {
              color: this.color[1],
              width: 4,
              opacity: 1,
            },
            itemStyle: {
              color: this.color[1],
              borderWidth: 2,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(127,64,255, 0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(127,64,255, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
                // shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
        ],
      };
      // if (options && typeof options === "object") {
      chart.setOption(options, true);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
