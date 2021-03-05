<template>
  <div class="admin">

    <!-- <div class="top_box" :class="{ scalingTrue: scaling }">
      <div class="top_main">
        <div class="head_box">融合通信平台管理系统</div>
      </div>
    </div> -->
    <div
      class="router_view "
    >
      <div class="router_main">
        <div class="router_box" >
          <router-view class="tttt" style="height:100%;width: 100%" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import eventbus from "@/assets/js/plugins/eventbus";
export default {
  name: "admin",
  data() {
    return {
      visible: false,
      showSubmenu: false,
      submenuType: "",
      subrouteActive: "",
      routerActive: "index",
      scaling: false,
      isIndex: true,
      switch1: false,
      showAccount: false,
      classModal: false,
      passwordModal: false,
      systemModal: false,
      aboutModal: false,
    };
  },
  watch: {},
  mounted() {
    if (sessionStorage.getItem("routerActive")) {
      if (sessionStorage.getItem("routerActive").indexOf("index") != -1) {
        this.isIndex = true;
      } else {
        this.isIndex = false;
      }

      this.routerActive = sessionStorage.getItem("routerActive");
    }
    if (sessionStorage.getItem("subrouteActive")) {
      this.subrouteActive = sessionStorage.getItem("subrouteActive");
    }
    let path = this.$route.path;
    if (path.indexOf("trafficManagement") != -1) {
      this.showSubmenu = true;
      this.submenuType = "trafficManagement";
    }
    if (path.indexOf("deviceManagement") != -1) {
      this.showSubmenu = true;
      this.submenuType = "deviceManagement";
    }
    if (path.indexOf("alarmManagement") != -1) {
      this.showSubmenu = true;
      this.submenuType = "alarmManagement";
    }
    if (path.indexOf("roleManagement") != -1) {
      this.showSubmenu = true;
      this.showAccount = true;
    }
    if (path.indexOf("accountManagement") != -1) {
      this.showSubmenu = true;
      this.showAccount = true;
    }
    eventbus.$on("HomeDetail", (path, state, subPath) => {
      console.log("用户选择小区", path, state, subPath);
      this.submenuType = path;
      this.routeChange(path, state, subPath);
      if (subPath) {
        this.submenuChange("/admin/" + path + "/" + subPath, subPath);
      }
    });
    console.log(this.submenuType, "submenuType");
  },
  methods: {
    turnUrl(name) {
      this.$router.push(name);
    },
    handleOpen() {
      this.visible = !this.visible;
    },
    handleClose() {
      console.log("1111");
      this.visible = false;
    },
    handleClick(value) {
      this.isIndex = false;
      console.log(value, "value");
      this.routerActive = "showSub";
      sessionStorage.setItem("routerActive", "showSub");
      this.visible = false;
      switch (value) {
        case "account":
          this.submenuType = "";
          this.showSubmenu = true;
          this.showAccount = true;
          this.subrouteActive = "roleManagement";
          sessionStorage.setItem("subrouteActive", "roleManagement");
          this.$router.push("/admin/roleManagement");
          break;
        case "class":
          this.classModal = true;
          break;
        case "password":
          this.passwordModal = true;
          break;
        case "system":
          this.systemModal = true;
          break;
        case "about":
          this.aboutModal = true;
          break;
        case "log":
          this.submenuType = "";
          this.showSubmenu = false;
          this.$router.push("/admin/syslog");
          break;
      }
      console.log(this.classModal, "classModal");
    },
    change(status) {
      this.$Message.info("开关状态：" + status);
    },
    routeChange(path, state, subPath) {
      this.showAccount = false;
      if (path != "index") {
        this.isIndex = false;
      } else {
        this.isIndex = true;
      }
      if (!state) {
        this.scaling = false;
      }
      this.routerActive = path;
      sessionStorage.setItem("routerActive", path);
      this.showSubmenu = state;
      this.submenuType = path;
      if (subPath) {
        sessionStorage.setItem("subrouteActive", subPath);
        this.subrouteActive = subPath;
      }
      this.$router.push("/admin/" + path);
    },
    submenuChange(path, subPath) {
      sessionStorage.setItem("subrouteActive", subPath);
      this.subrouteActive = subPath;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  position: relative;
  background-color: #f0f3fa;
  .menu_box {
    .active {
      background-color: #f0f3fa !important;
      span {
        color: #4977e6 !important;
      }
    }
  }

  .subActive {
    background-color: #f1f3fb !important;
  }
}
.scaling {
  width: 70px !important;
}
.scalingImg {
  cursor: pointer;
}
.left_box {
  width: 170px;
  height: 1040px;
  position: relative;
  z-index: 999;
  // background-color: #fff;
  .logo_box {
    background-color: #4977e6;
    height: 50px;
    width: 100%;
    position: relative;
    span {
      display: inline-block;
      color: #fff;
      margin-top: 12px;
      margin-left: 44px;
      font-size: 18px;
    }
    img {
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 25px;
      width: 20px;
      height: 17px;
    }
  }
  .user_box {
    background-color: #fff;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    /deep/ {
      .ivu-select-dropdown {
        width: 166px !important;
        top: 76px !important;
        left: 2px !important;
        text-align: center;
        padding: 18px 0;
      }
      .div {
        padding: 10px 16px;
        cursor: pointer;
      }
      .div:hover {
        background-color: #f0f3fa;
      }
      .switch-icon {
        position: absolute;
        left: 120px;
        margin-top: 2px;
      }
      .ivu-switch {
        width: 36px;
        height: 19px;
        line-height: 19px;
      }
      .ivu-switch:after {
        width: 15px;
        height: 15px;
      }
      .ivu-switch-checked {
        border-color: #49c265;
        background-color: #49c265;
      }
      .ivu-switch-checked:after {
        left: 18px;
      }
    }
    .log-out {
      color: #4977e6;
      margin: 12px 18px;
      background-color: #f0f3fa;
      padding: 8px;
      border-radius: 20px;
    }
    .user_img {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 14px;
      border-radius: 50%;
    }
    .user-name {
      position: absolute;
      left: 70px;
      font-weight: 900;
    }
    .jt {
      position: absolute;
      right: 20px;
      width: 15px;
      height: 16px;
      cursor: pointer;
    }
  }
  .submenu_box {
    height: 950px;
    width: 100%;
    background-color: #fff;
    box-shadow: 5px 0px 7px 0px rgba(87, 91, 101, 0.15);
    // ul {
    //   padding: 30px 10px;
    //   li {
    //     height: 40px;
    //     border-radius: 20px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin-bottom: 12px;
    //     cursor: pointer;
    //   }
    //   li:hover {
    //     background-color: #f1f3fb;
    //   }
    //   img {
    //     // width: 28px;
    //     // height: 24px;
    //   }
    //   span {
    //     color: #575b65;
    //     font-weight: 900;
    //     margin-left: 8px;
    //   }
    // }
  }
}
.scalingTrue {
  padding-left: 70px !important;
}
.top_box {
  position: absolute;
  top: 0;
  height: 130px;
  width: 100%;
  padding-left: 170px;
  z-index: 1;
  .top_main {
    width: 100%;
    height: 50px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.06);
    .head_box {
      height: 50px;
      width: 100%;
      background: linear-gradient(to right, #5889fc 5%, #4977e6 95%);
      padding: 0 35px;
      font-weight: 900;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 22px;
    }
    .menu_box {
      height: 80px;
      width: 100%;
      background-color: #fff;
      ul {
        display: flex;
        justify-content: space-around;
        height: 100%;
        li {
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 110px;
          color: #6a7997;
          img {
            // width: 24px;
            // height: 24px;
          }
        }
        li:hover {
          background-color: #f0f3fa;
          span {
            color: #4977e6;
          }
        }
      }
    }
  }
}
.router_view {
  position: absolute;
  top: 80px;
  // padding-left: 170px;
  width: 100%;
  // height: calc(100% - 130px);
  background-color: #f0f3fa;
  .router_main {
    width: 100%;
    height: 100%;
    padding: 30px;
    .router_box {
      width: 100%;
      height: 960px;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      padding: 30px;
    }
    .isIndex {
      background-color: #f0f3fa;
      box-shadow: none;
    }
    /*滚动条样式*/
    .router_box::-webkit-scrollbar {
      width: 4px;
      /*height: 4px;*/
    }
    .router_box::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.1);
    }
    .router_box::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
.hasSubmenu {
  padding-left: 0;
  z-index: 99;
}
.tttt {
  overflow: initial !important;
}
.classlist {
  display: flex;
  .addbox {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    padding-left: 40px;
    align-items: center;
    span:first-child {
      margin-right: 10px;
    }
  }
  .left {
    display: flex;
    justify-content: space-between;
    width: 210px;
    padding: 0 20px;
    padding-left: 40px;
    align-items: center;
  }
  .classadd {
    margin-left: 20px;
  }
  .right {
    display: inline-block;
    img {
      cursor: pointer;
    }
    .classdel {
      margin-left: 20px;
    }
  }
}
.form_box /deep/ .ivu-form-item {
  margin-bottom: 0;
}
.platname {
  text-align: center;
  color: #4977e6;
  font-size: 18px;
  margin-bottom: 10px;
}
.version {
  text-align: center;
  color: #4977e6;
  margin-bottom: 20px;
}
</style>
