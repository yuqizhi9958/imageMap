<template>
  <div class="admin-content">
    <div class="top_box">
      <div class="left">
        <div class="title_box">
          <img class="zccl" src="@/assets/img/zccl.png" alt />
          <div>
            <span>
              <i class="circle user_total user_total_c"></i>
              <i class="user_total">会员人数(人)</i>
            </span>
            <span>112</span>
          </div>
        </div>
        <div class="title_box">
          <img class="sycl" src="@/assets/img/sycl.png" alt />
          <div>
            <span>
              <i class="circle user_total user_total_c"></i>
              <i class="user_total">会员联系人(人)</i>
            </span>
            <span>112</span>
          </div>
        </div>
        <div class="title_box">
          <img class="ccsr" src="@/assets/img/ccsr.png" alt />
          <div>
            <span>
              <i class="circle user_total user_total_c"></i>
              <i class="user_total">职工(人)</i>
            </span>
            <span>11</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="unit_info">
          <div @click="routeChange('vipManagement',false,'')">
            <img src="@/assets/img/indexvip.png" alt="" />
            <p>添加会员</p>
          </div>
          <div @click="routeChange('trafficManagement',true,'photoRecords')">
            <img src="@/assets/img/camera.png" alt="" />
            <p>抓拍记录</p>
          </div>
          <div @click="routeChange('trafficManagement',true,'accessRecord')">
            <img src="@/assets/img/indexcrjl.png" alt="" />
            <p>出入记录</p>
          </div>
          <div @click="routeChange('alarmManagement',true,'alarmMessage')">
            <img src="@/assets/img/indexbj.png" alt="" />
            <p>报警消息</p>
          </div>
        </div>
      </div>
    </div>
    <div class="chart_box">
      <div class="left">
        <p>实时进出人流量</p>
        <curve
          :legend="{ right: 280, top: 7 }"
          :color="['#7F40FF', '#4977E6']"
          :grid="[53, 43, 24, 43]"
          :xdata="meetingTimeList.map((item) => item.createdTime)"
          :ydata="meetingTimeList.map((item) => item.carFlow)"
          :ydataTwo="meetingTimeList.map((item) => item.personFlow)"
        ></curve>
      </div>
      <div class="right">
        <p>实时测温</p>
        <lineChart
          :grid="[53, 43, 24, 43]"
          :xdata="lineList.time"
          :ydata="lineList.temperature"
        ></lineChart>
      </div>
    </div>
  </div>
</template>

<script>
import curve from "@/components/chart/curve";
import lineChart from "@/components/chart/line";
import eventbus from "@/assets/js/plugins/eventbus";
export default {
  components: {
    curve,
    lineChart,
  },
  data() {
    return {
      meetingTimeList: [
        { carFlow: 799, createdTime: "2020-09-17", personFlow: 233 },
        { carFlow: 699, createdTime: "2020-09-17", personFlow: 233 },
        { carFlow: 99, createdTime: "2020-09-17", personFlow: 533 },
        { carFlow: 1199, createdTime: "2020-09-17", personFlow: 233 },
      ],
      lineList: {
        time: [12, 13, 14, 15, 16, 17],
        temperature: [22, 23, 24, 25, 26, 27],
      },
    };
  },
  created() {
    console.log("created");
  },
  methods: {
    routeChange(path, state, subPath) {
      eventbus.$emit("HomeDetail", path, state, subPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-content {
  // background-color: #F0F3FA;
}
.chart_box {
  overflow: hidden;
  width: 100%;
  height: 680px;
  display: flex;
  margin-top: 30px;
  background: #ffffff;
  border-radius: 15px;
  .left,
  .right {
    height: 550px;
    width: 50%;
    p {
      padding-left: 40px;
      font-size: 26px;
      color: #333333;
      font-weight: 900;
      margin-top: 40px;
    }
  }
}
.top_box {
  width: 100%;
  height: 120px;
  display: flex;
  .left,
  .right {
    display: flex;
    width: 50%;
  }
}
.title_box:nth-child(2) {
  margin: 0 20px;
}
.title_box {
  cursor: pointer;
  width: 31%;
  height: 120px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.09);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  span:first-child {
    position: absolute;
    right: 23px;
    top: 38px;
    color: #52607d;
  }
  span:nth-child(2) {
    position: absolute;
    font-size: 24px;
    right: 23px;
    top: 64px;
    color: #52607d;
  }
  i {
    font-style: normal;
    font-size: 18px;
  }
  .ccsr {
    width: 50px;
    height: 45px;
  }
  .sycl {
    width: 55px;
    height: 55px;
  }
  .zccl {
    width: 72px;
    height: 45px;
  }
  .lscl {
    width: 50px;
    height: 55px;
  }
}
.title_box:hover {
  background-color: #f5a518;
  box-shadow: 15px 20px 25px 0px rgba(245, 165, 24, 0.35);
  span {
    color: #fff;
  }
}
.unit_info {
  width: 100%;
  background-color: #fff;
  z-index: 11;
  display: flex;
  top: 31px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 15px 0px rgba(82, 96, 125, 0.2);
  border-radius: 10px;
  height: 120px;
  div {
    flex: 1;
    cursor: pointer;
    text-align: center;
    border-right: 1px solid #d7d9dd;
    p {
      color: #6a7997;
      font-size: 20px;
    }
    .number {
      color: #33425c;
      font-size: 20px;
      font-weight: 900;
    }
  }
  div:last-child {
    border: none;
  }
}
</style>
