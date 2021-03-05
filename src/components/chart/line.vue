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
    xdata: {
      type: Array,
      default: () => [],
    },
    ydata: {
      type: Array,
      default: () => [],
    },
    grid: {
      type: Array,
      default: () => [0, 0, 0, 0],
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
        axisPointer: {
          lineStyle: {
            color: "rgba(78,82,155, 0.2)",
            type: "dashed",
          },
        },
        legend: {
          show: false,
          right: 10,
          top: 25,
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            show: true,
            axisLabel: {
              show: true,
            },
            name: "",
            scale: false,
            min: null,
            max: null,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e0dede",
                type: "dashed",
              },
            },
            axisLine: {
              show: false,
            },
          },
          {
            type: "value",
            axisTick: {
              show: false,
            },
            show: true,
            axisLabel: {
              show: true,
            },
            name: "",
            scale: false,
            min: null,
            max: null,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e0dede",
                type: "dashed",
              },
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "温度",
            type: "bar",
            data: this.ydata,
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                opacity: 1,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            barMaxWidth: 20,
          },
        ],
        xAxis: [
          {
            type: "category",
            name: "",
            nameLocation: "middle",
            nameGap: 22,
            data: this.xdata,
            axisLabel: {
              show: true,
              fontSize: 10,
            },
            show: true,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#e0dede",
                type: "dashed",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          confine: true,
        },
        color: ["#FE8686"],
        grid: {
          top: this.grid[0] || 0,
          right: this.grid[1] || 0,
          bottom: this.grid[2] || 0,
          left: this.grid[3] || 0,
          containLabel: true,
        },
        textStyle: {
          fontFamily: "Arial",
          color: "#9d9d9d",
        },
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
