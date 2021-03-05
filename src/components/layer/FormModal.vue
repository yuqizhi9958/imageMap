<template>
  <Modal class="form-modal" :value="show" :width="width" :title="title" :footer-hide="footerHide" @on-ok="ok" @on-cancel="cancel">
    <slot></slot>
  </Modal>
</template>

<script>
export default {
  name: 'FormModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: '480'
    },
    title: {
      type: String,
      default: '表单模态框'
    },
    footerHide: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ok () {
      this.$emit('on-ok')
    },
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-modal {
    /deep/ {
      .ivu-modal-wrap {
        z-index: 1048 !important;
        display: flex;
        align-items: center;
      }
      .ivu-modal-mask {
        z-index: 1020 !important;
        background: rgba(0, 0, 0, 0.6);
      }
      .ivu-modal {
        top: 0;
      }
      .ivu-modal-content {
        border-radius: 0;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.6);
        box-shadow: 2px 0 3px rgba(4, 26, 55, .16);
        border-radius: 14px;
        .ivu-modal-header {
          border: 0;
          padding: 0;
          .ivu-modal-header-inner {
            position: relative;
            // background: linear-gradient(180deg, #1578BC, #1E81C4);
            border-radius: 4px 4px 0 0;
            display: flex;
            height: 63px;
            align-items: center;
            justify-content: center;
            color: #297AFF;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            // border-bottom: 1px solid rgba(112, 112, 112, 0.08);
            &::after {
              position: absolute;
              content: '';
              left: 40px;
              right: 40px;
              bottom: 0;
              border-bottom: 1px solid rgba(112, 112, 112, 0.08);
            }
          }
        }
        .ivu-modal-close  {
          top: 5px;
          right: 5px;
          .ivu-icon-ios-close {
            color: rgba(255, 255, 255, 0.38);
            font-size: 36px;
            font-weight: bold;
            &:hover {
              color: #ffffff;
            }
          }
        }
      }
      .ivu-modal-body {
        padding: 0;
        max-height: 840px;
        // overflow-y: auto;
      }
    }
  }
</style>
