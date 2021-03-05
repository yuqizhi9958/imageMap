<template>
  <div>
    <div class="rule_main">
      <div class="rule_box">
        <div class="input_box">
          <p>会员报警时间</p>
          <CheckboxGroup v-model="vipTime">
            <Checkbox label="1">周一</Checkbox>
            <Checkbox label="2">周二</Checkbox>
            <Checkbox label="3">周三</Checkbox>
            <Checkbox label="4">周四</Checkbox>
            <Checkbox label="5">周五</Checkbox>
            <Checkbox label="6">周六</Checkbox>
          </CheckboxGroup>
          <TimePicker
            size="large"
            format="HH:mm"
            type="timerange"
            placement="bottom-end"
            placeholder="请选择起止时间"
            style="width: 320px; margin-top: 10px"
          ></TimePicker>
          <div class="img_box">
            <img src="@/assets/img/add.png" alt="" />
          </div>
          <div class="input-box">
            <Input
              class="input-width"
              size="large"
              style="width: 400px"
              placeholder="请输入自定义文字，例如：当前为禁止进入时间，请及时处理"
            />
          </div>
          <div class="input-box demo">
            消息提示示例：【<span>某某幼儿园</span>】报警消息！2020-01-01
            11:11:11位于<span>设备位置</span>的<span>设备</span>抓拍到<span
              >会员小王</span
            >
          </div>
        </div>
        <div class="input_box">
          <p>会员联系人报警时间</p>
          <CheckboxGroup v-model="times">
            <Checkbox label="1">周一</Checkbox>
            <Checkbox label="2">周二</Checkbox>
            <Checkbox label="3">周三</Checkbox>
            <Checkbox label="4">周四</Checkbox>
            <Checkbox label="5">周五</Checkbox>
            <Checkbox label="6">周六</Checkbox>
          </CheckboxGroup>
          <TimePicker
            size="large"
            format="HH:mm"
            type="timerange"
            placement="bottom-end"
            placeholder="请选择起止时间"
            style="width: 320px; margin-top: 10px"
          ></TimePicker>
          <div class="img_box">
            <img src="@/assets/img/add.png" alt="" />
          </div>
          <div class="input-box">
            <Input
              class="input-width"
              size="large"
              style="width: 400px"
              placeholder="请输入自定义文字，例如：当前为禁止进入时间，请及时处理"
            />
          </div>
          <div class="input-box demo">
            消息提示示例：【<span>某某幼儿园</span>】报警消息！2020-01-01
            11:11:11位于<span>设备位置</span>的<span>设备</span>抓拍到<span
              >会员小王</span
            >
          </div>
          <div class="input_box">
            <p>通知方式</p>
            <CheckboxGroup v-model="times">
              <Checkbox label="1">短信通知</Checkbox>
            </CheckboxGroup>
          </div>
          <div class="input_box">
            <p>通知人</p>
            <CheckboxGroup v-model="times">
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
              <Checkbox label="1">联系人</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
      </div>
      <div class="rule_box">
        <div class="input_box">
          <p>职工报警时间</p>
          <CheckboxGroup v-model="vipTime">
            <Checkbox label="1">周一</Checkbox>
            <Checkbox label="2">周二</Checkbox>
            <Checkbox label="3">周三</Checkbox>
            <Checkbox label="4">周四</Checkbox>
            <Checkbox label="5">周五</Checkbox>
            <Checkbox label="6">周六</Checkbox>
          </CheckboxGroup>
          <TimePicker
            size="large"
            format="HH:mm"
            type="timerange"
            placement="bottom-end"
            placeholder="请选择起止时间"
            style="width: 320px; margin-top: 10px"
          ></TimePicker>
          <div class="img_box">
            <img src="@/assets/img/add.png" alt="" />
          </div>
          <div class="input-box">
            <Input
              class="input-width"
              size="large"
              style="width: 400px"
              placeholder="请输入自定义文字，例如：当前为禁止进入时间，请及时处理"
            />
          </div>
          <div class="input-box demo">
            消息提示示例：【<span>某某幼儿园</span>】报警消息！2020-01-01
            11:11:11位于<span>设备位置</span>的<span>设备</span>抓拍到<span
              >会员小王</span
            >
          </div>
        </div>
        <div class="input_box">
          <p>陌生人报警时间</p>
          <CheckboxGroup v-model="times">
            <Checkbox label="1">周一</Checkbox>
            <Checkbox label="2">周二</Checkbox>
            <Checkbox label="3">周三</Checkbox>
            <Checkbox label="4">周四</Checkbox>
            <Checkbox label="5">周五</Checkbox>
            <Checkbox label="6">周六</Checkbox>
          </CheckboxGroup>
          <TimePicker
            size="large"
            format="HH:mm"
            type="timerange"
            placement="bottom-end"
            placeholder="请选择起止时间"
            style="width: 320px; margin-top: 10px"
          ></TimePicker>
          <div class="img_box">
            <img src="@/assets/img/add.png" alt="" />
          </div>
          <div class="input-box">
            <Input
              class="input-width"
              size="large"
              style="width: 400px"
              placeholder="请输入自定义文字，例如：当前为禁止进入时间，请及时处理"
            />
          </div>
          <div class="input-box demo">
            消息提示示例：【<span>某某幼儿园</span>】报警消息！2020-01-01
            11:11:11位于<span>设备位置</span>的<span>设备</span>抓拍到<span
              >会员小王</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="subBox">
      <span>更新于：2020.09.02 12:20:01</span>
      <div>
        <span class="submit">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vipTime: [],
      times: [],
      times: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.rule_box {
  width: 50%;
  // margin: 0 auto;
  // text-align: center;
  margin: 0 20px;
  /deep/ {
    .ivu-checkbox-wrapper {
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
}
.rule_main {
  display: flex;
  justify-content: space-around;
}
.messageType {
  width: 100%;
}
.input_box {
  margin-bottom: 45px;
  .input-box {
    margin-top: 18px;
  }
  .demo {
    color: #6a7997;
    span {
      color: #4977e6;
    }
  }
  p {
    margin-bottom: 10px;
    color: #8b99b4;
  }
  .img_box {
    display: inline-block;
    height: 28px;
    width: 40px;
    margin-left: 15px;
    position: relative;
    img {
      position: absolute;
      top: 10px;
      cursor: pointer;
    }
  }
  /deep/ {
    .ivu-input {
      background-color: #f1f3fb;
      border: none;
    }
    .ivu-input::-webkit-input-placeholder {
      color: #bac6dd;
      font-size: 14px;
    }
    /deep/ .ivu-input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #bac6dd;
      font-size: 14px;
    }
    /deep/ .ivu-input::-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #bac6dd;
      font-size: 14px;
    }
    /deep/ .ivu-input::-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #bac6dd;
      font-size: 14px;
    }
  }
}
.subBox {
  // margin-top: 60px;
  text-align: center;
  color: #8b99b4;

  .submit {
    margin-top: 10px;
    color: #fff;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #4977e6;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
