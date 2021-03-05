<template>
  <Modal class="toolbar-modal" :value="show" width="100%" :title="title" :mask="false" :footer-hide="true" @on-cancel="cancel">
    <slot></slot>
  </Modal>
</template>

<script>
export default {
  name: 'ToolbarModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '工具栏模态框'
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
  .toolbar-modal {
    /deep/ {
      .ivu-modal-wrap {
        top: 58px;
        z-index: 1024 !important;
      }
      .ivu-modal-mask {
        background: rgba(0, 0, 0, 0.6);
      }
      .ivu-modal {
        top: 0;
        bottom: 0;
        position: absolute;
      }
      .ivu-modal-content {
        height: 100%;
        border-radius: 0;
        background: rgba(5, 22, 39, .9);
        border: none;
        clip-path: polygon(0 0, calc(50% - 213px) 0, calc(50% - 183px) 30px, calc(50% + 187px) 30px, calc(50% + 220px) 0, 100% 0, 100% 100%, 0 100%);
        .ivu-modal-header {
          border: 0;
          padding: 0;
          .ivu-modal-header-inner {
            background: rgba(9, 49, 85, .62);
            box-shadow: 0 10px 10px -10px rgba(255, 255, 255, 0.62) inset, -10px 0 10px -10px rgba(255, 255, 255, 0.62) inset, 10px 0 10px -10px rgba(255, 255, 255, 0.62) inset;
            display: flex;
            height: 48px;
            align-items: center;
            justify-content: flex-start;
            text-indent: 15px;
            color: rgba(28, 177, 255, 0.9);
            font-size: 18px;
            font-weight: bold;
          }
        }
        .ivu-modal-body {
          height: calc(100% - 48px);
          padding: 0;
          font-size: 14px;
          overflow: auto;
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5) inset;
          // box-shadow: 0 0 5px rgba(255, 255, 255, 0.62) inset;
        }
        .ivu-modal-close  {
          top: 6px;
          right: 6px;
          .ivu-icon-ios-close {
            color: #415778;
            font-size: 36px;
            font-weight: bold;
            &:hover {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
</style>
