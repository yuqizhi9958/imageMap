<template>
  <Modal class="detail-modal" :value="show" :width="width" :title="title" :footer-hide="true" @on-cancel="cancel">
    <slot></slot>
  </Modal>
</template>

<script>
export default {
  name: 'DetailModal',
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
      default: '详情信息模态框'
    }
  },
  methods: {
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-modal {
    /deep/ {
      .ivu-modal-wrap {
        z-index: 1048 !important;
        display: flex;
        align-items: center;
      }
      .ivu-modal-mask {
        z-index: 1048 !important;
        background: rgba(0, 0, 0, 0.6);
      }
      .ivu-modal {
        top: 0;
      }
      .ivu-modal-content {
        border-radius: 0;
        background: rgba(5, 22, 39, .9);
        border: 1px solid rgba(0, 171, 255, .5);
        box-shadow: 0px 0px 8px rgba(0, 182, 255, 0.26);
        border-radius: 4px;
        .ivu-modal-header {
          border: 0;
          padding: 0;
          .ivu-modal-header-inner {
            background: rgba(9, 49, 85, .62);
            border-radius: 4px 4px 0 0;
            display: flex;
            height: 48px;
            align-items: center;
            justify-content: center;
            color: #1cb1ff;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .ivu-modal-close  {
          top: 6px;
          right: 6px;
          .ivu-icon-ios-close {
            color: #415778;
            font-size: 32px;
            font-weight: bold;
            &:hover {
              color: rgba(1, 214, 255, 0.7);
            }
          }
        }
      }
      .ivu-modal-body {
        padding: 0;
      }
    }
  }
</style>
