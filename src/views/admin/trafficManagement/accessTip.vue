<template>
  <div class="rule_box">
    <div class="input_box">
      <span>默认提示语</span>
      <Input class="input-width" size="large" placeholder="请输入自定义文字，例如：请正对摄像头" style="width: 400px" />
    </div>
      <div class="input_box">
      <span>允许通行提示语</span>
      <Input class="input-width" size="large" placeholder="请输入自定义文字，例如欢迎光临" style="width: 400px" />
    </div>
      <div class="input_box">
      <span>非通行时间提示语</span>
      <Input class="input-width" size="large" placeholder="请输入自定义文字，例如：当前时间不允许通行" style="width: 400px" />
    </div>
      <div class="input_box">
      <span>陌生人提示语</span>
      <Input class="input-width" size="large" placeholder="请输入自定义文字，例如：无通行权限" style="width: 400px" />
    </div>
      <div class="input_box">
      <span>提问报警提示语</span>
      <Input class="input-width" size="large" placeholder="请输入自定义文字，例如：体温报警" style="width: 400px" />
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
  width: 536px;
  margin: 0 auto;
  // text-align: center;
}
.input_box {
  margin-top: 20px;
  span {
    display: inline-block;
    width: 120px;
    text-align: right;
    color: #6A7997;
    margin-right: 10px;
  }
  /deep/ {
    .ivu-input {
      background-color: #f1f3fb;
      border: none;
    }
    .ivu-input::-webkit-input-placeholder {
      color: #BAC6DD;
      font-size: 14px;
    }
    /deep/ .ivu-input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #BAC6DD;
      font-size: 14px;
    }
    /deep/ .ivu-input::-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #BAC6DD;
      font-size: 14px;
    }
    /deep/ .ivu-input::-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #BAC6DD;
      font-size: 14px;
    }
  }
}
.subBox {
  margin-top: 60px;
  text-align: center;
  color: #8B99B4;
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
