<template>
  <div class="login">
    <div class="login-container">
      <!-- <div class="container-title">
        <div class="main-title">
          <span>可视化物联网物业管控平台</span>
        </div>
        <div class="sub-title">Visual Internet of things property management platform</div>
      </div>-->
      <div class="bg-box">
        <img src="@/assets/img/login-bg.png" alt="">
      </div>
      <div class="container-content">
        <!-- <div class="logo_box">
          <img class="logo_img" src="@/assets/img/logo.png" alt />
        </div>-->
        <div class="content-title">
          <p>欢迎使用</p>

          <p>智慧幼儿园平台</p>
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="account">
            <img class="login_icon" src="@/assets/img/wode.png" alt srcset />
            <i-input
              placeholder="请输入登录账号"
              class="app-input-login"
              v-model.trim="formInline.account"
            ></i-input>
          </FormItem>
          <FormItem prop="password">
            <img
              class="login_icon password"
              src="@/assets/img/suo.png"
              alt
              srcset
            />
            <i-input
              placeholder="请输入密码"
              type="password"
              class="app-input-login"
              v-model.trim="formInline.password"
            ></i-input>
          </FormItem>
          <!-- <FormItem>
            <Checkbox
              :checked.sync="accountState"
              on-change="saveAccount"
              v-model="accountState"
              @on-change="saveAccount"
            >记住账号</Checkbox>
          </FormItem>-->
          <FormItem>
            <div class="auth">
              <img
                class="login_icon"
                src="@/assets/img/yanzhengma.png"
                alt
                srcset
              />
              <input
                class="authCodeIpt"
                @keyup.enter="btnLogin(formInline)"
                v-model.trim="authCode"
                placeholder="请输入验证码"
              />
              <div class="authCode">
                <img :src="authCodeUrl" alt="验证码" @click="getCaptcha" />
              </div>
            </div>
          </FormItem>
          <!-- <FormItem>
            <Button type="primary" @click="btnLogin(formInline)">登 录</Button>
          </FormItem>-->
        </Form>
        <div class="y-login-bottom">
          <Button type="primary" @click="btnLogin(formInline)">登 录</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "adminLogin",
  components: {},
  data() {
    return {
      // single: false,
      // accountState: localStorage.getItem("ZHYUN") ? true : false,
      authCode: "",
      authCodeUrl: "",
      UUID: "",
      formInline: {
        // username: localStorage.getItem("ZHYUN") || "",
        account: "",
        password: "",
        // platform: 10
      },
      ruleInline: {
        account: [
          {
            required: true,
            message: "请输入登录账号",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 3,
            message: "请至少输入三位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    add() {
      console.log("键盘按下");
    },
    // 记住账户
    saveAccount(data) {
      if (state && this.formInline.account) {
        localStorage.setItem("ZHYUN", this.formInline.account);
      } else {
        localStorage.removeItem("ZHYUN");
      }
    },

    // 获取uuid
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        return (c === "x"
          ? (Math.random() * 16) | 0
          : "r&0x3" | "0x8"
        ).toString(16);
      });
    },
    // 请求验证码
    getCaptcha() {
      this.authCodeUrl =
        // "/api/rest/captcha.jpg"
        "https://data.sznane.com:8001/api/rest/captcha.jpg?t=" +
        new Date().getTime();
    },

    // 请求登录接口
    login() {},
    // 点击登录按钮
    btnLogin() {
      // let changePs = encrypt.Decrypt(pwdNew);
      // let changeName = encrypt.Decrypt(userName);
      // console.log(this.formInline.account,"原始账号");
      // console.log(this.formInline.password,'原始密码');
      // console.log(userName, "--加密后账号");
      // console.log(pwdNew, "--加密后密码");
      // console.log(changePs, "--解密后密码");
      // console.log(changeName, "--解密后账号");
      // return;
      // if (!this.accountState && this.username) {
      //   localStorage.setItem("ZHYUN", this.username);
      // }

      // 前端验证
      // if (this.authCode.length == 4) {
      if (this.formInline.account.length > 2) {
        if (this.formInline.password.length > 2) {
          sessionStorage.setItem("userName", this.formInline.account);
          this.login();
        } else {
          this.$Message.error("密码错误或不能少于3个字符");
        }
      } else {
        this.$Message.error("请填写用户名或用户名不能少于3个字符");
      }
      // } else {
      //   this.$Message.error("请输入验证码");
      // }
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-width: 1200px;
  height: 100%;
  min-height: 530px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#297AFF), to(#2C9BF5));
  background-color: #2c9bf5;
  // background: url("../../assets/img/login_bg1.png") no-repeat;
  // background-size: 100% 100%;
  // background-position: center;
  position: relative;
  user-select: none;

  .login-container {
    position: absolute;
    width: 1200px;
    // height: 530px;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    line-height: 1;
    display: flex;
    border-radius: 30px;

    .container-title {
      width: 570px;
      text-align: center;
      font-family: "思源黑体";
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 530px;

      .main-title {
        margin-bottom: 20px;

        span {
          white-space: nowrap;
          display: inline-block;
          font-size: 34px;
          font-weight: bold;
          letter-spacing: 4px;
          background-clip: text;
          color: #fefeff;
          font-size: bold;
        }
      }

      .sub-title {
        color: #fefeff;
        font-size: 14px;
      }
    }
    .bg-box {
      margin: 0 auto;
      img {
        margin-top: 60px;
      }
    }
    .container-content {
      // width: 500px;
      margin: 0 auto;
      // background-color: #fff;
      // padding: 90px 24px 0 46px;
      box-sizing: border-box;
      // background: rgba(255, 255, 255, 1);
      border-radius: 25px;
      padding: 40px 0px;
      // height: 530px;

      .content-title {
        color: #3a3d40;
        font-size: 40px;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 100px;
        text-align: left;
        p {
          margin-bottom: 20px;
        }
        // line-height: 14px;
      }

      label {
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }

      .square {
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
        border: 2px solid #aeaeae;
        margin: 0 4px 2px 0;
      }

      input[type="checkbox"]:checked + .square:after {
        content: "✓";
        font-size: 18px;
        font-weight: bold;
        line-height: 16px;
        display: block;
        color: #aeaeae;
      }

      .auth {
        // margin-bottom: 20px;
        // position: relative;
        display: flex;
        justify-content: space-between;
        .authCode {
          // float: right;
          width: 135px;
          height: 54px;

          img {
            width: 100%;
            height: 42px;
            cursor: pointer;
            margin-top: 6px;
          }
        }

        .authCodeIpt {
          // float: left;
          // width: 160px;
          border: none;
          outline: none;
          // border-bottom: 3px solid #ccc;
          height: 54px;
          color: #333;
          font-size: 22px;
          // background: #e8edf3;
          padding-left: 18px;
          margin-right: 10px;
          flex: 1;
          font-weight: 100;
          background-color: transparent !important;
        }

        .authCodeIpt::placeholder {
          color: #aaa;
        }
      }

      .ivu-form-item {
        margin-bottom: 14px;
        padding-bottom: 20px;
        position: relative;
        // border-bottom: 1px solid #ebebeb;
        .app-input-login {
          margin: 0 auto;
          text-align: center;
          background: transparent;
          border-radius: 1px;
          // border-bottom: 3px solid #ccc;

          /deep/ {
            .ivu-input::-webkit-input-placeholder {
              font-size: 24px !important;
            }
            .ivu-input {
              // background: transparent;
              border: none;
              border-radius: 0;
              font-size: 24px;
              color: #333;
              padding: 0 16px 0 16px;
              height: 54px;
              line-height: 54px;
              background-color: transparent !important;
              &::placeholder {
                font-size: 16px;
                color: #9ea2a7;
                font-weight: 100;
              }

              &:hover,
              &:focus {
                border: none;
                box-shadow: none;
              }
            }

            .ivu-input-prefix,
            .ivu-input-suffix {
              width: 54px;
              left: 0;
              right: auto;

              i {
                font-size: 28px;
                line-height: 54px;
                color: #616161;
                width: 54px;
                height: 54px;
                display: inline-block;
                &::before {
                  content: none;
                }
              }
              .app-icon-account {
                // background: url("../../assets/img/tel.png") center center
                // no-repeat;
              }
              .app-icon-password {
                // background: url("../../assets/img/pw.png") center center
                // no-repeat;
              }
            }
          }
        }

        .app-button-login {
          width: 100%;
          margin-top: 35px;

          /deep/ {
            height: 46px;
            color: #ffffff;
            font-size: 18px;
            background-color: #041267;
            border: none;
            box-shadow: none;
            border-radius: 24px;
          }
        }
      }

      .ivu-form-item-content {
        width: 350px;
        .ivu-input-wrapper {
          width: 100%;

          .ivu-input {
            width: 100%;
          }
        }
        .ivu-btn {
          width: 100%;
          height: 46px;
          border-radius: 30px;
          font-size: 18px;
          color: #fff;
          background-color: #041267;
        }
      }

      .ivu-form {
        // background: #fff;
        width: 500px;
        border-radius: 2px;
        // padding: 28px 24px 3px;
        margin-bottom: 20px;
      }

      .y-login-bottom {
        text-align: center;
        .ivu-btn-primary {
          width: 300px;
          height: 60px;
          background: #3870f6;
          border-radius: 35px;
          box-shadow: 8px 10px 38px 2px rgba(41, 122, 255, 0.46);
          font-size: 24px;
          margin: 24px 0px;
        }
      }
    }
  }

  .clearfix::after {
    content: "0";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }
}
.login_icon {
  width: 33px;
  height: 33px;
  position: absolute;
  z-index: 11;
  top: 14px;
  left: 12px;
}
.password {
  width: 28px;
}
.logo_img {
  margin-bottom: 10px;
  width: 80px;
  height: 86px;
}
.logo_box {
  text-align: center;
}
/deep/ {
  .ivu-divider-horizontal.ivu-divider-with-text-center:after,
  .ivu-divider-horizontal.ivu-divider-with-text-center:before,
  .ivu-divider-horizontal.ivu-divider-with-text-left:after,
  .ivu-divider-horizontal.ivu-divider-with-text-left:before,
  .ivu-divider-horizontal.ivu-divider-with-text-right:after,
  .ivu-divider-horizontal.ivu-divider-with-text-right:before {
    border-top: 1px solid #00e4ff;
    opacity: 0.2;
  }
  .ivu-divider-inner-text {
    font-size: 60px;
    color: #01e5ff;
  }
}
/deep/ {
  .ivu-form-item-content {
    // border: 1px solid rgba(#01c1ff, 0.6);
    // border-radius: 35px;
    border-bottom: 1px solid #ebebeb;
    padding: 4px 24px;
    padding-left: 58px;
  }
}
</style>
