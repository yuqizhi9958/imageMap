<template>
  <div style="overflow: auto">
    <div class="container-operation">
      <span @click="showModal = true" class="new">新增</span>
      <span @click="showModal = true" class="new">编辑</span>
      <span @click="deleteModal = true" class="export">删除</span>
    </div>
    <div class="container-search">
      <Select clearable placeholder="设备类型">
        <Option value="1">人员类型1</Option>
        <Option value="2">人员类型2</Option>
      </Select>
      <Input
        class="input-width"
        size="large"
        placeholder="请输入姓名"
        clearable
      />
      <Input
        class="input-width"
        size="large"
        placeholder="请输入手机号码"
        clearable
      />
      <Select clearable placeholder="职位">
        <Option value="1">人员类型1</Option>
        <Option value="2">人员类型2</Option>
      </Select>
      <span class="span search">搜索</span>
      <span class="span reset">重置</span>
    </div>
    <div class="container-table">
      <Table
        :stripe="true"
        :disabled-hover="true"
        :columns="tableColumns"
        :data="tableData"
      ></Table>
      <Spin size="large" fix v-if="loading"></Spin>
    </div>
    <div class="container-page">
      <Page
        :total="totalCount"
        :current="params.pageNum"
        :page-size="params.pageSize"
        placement="top"
        show-total
        show-elevator
        show-sizer
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      />
    </div>
    <Modal
      class-name="vertical-center-modal"
      v-model="showModal"
      width="520"
      height="700"
    >
      <p slot="header" style="color: #6a7997; text-align: center">
        <span>{{ modalTitle }}</span>
      </p>
      <div class="form_box">
        <Form ref="editForm" label-position="right" :label-width="100">
          <Form-Item label="姓名" prop="name">
            <Input style="width: 190px" placeholder="请输入姓名" size="large" />
          </Form-Item>
          <Form-Item label="电话">
            <Input style="width: 190px" placeholder="请输入电话" size="large" />
          </Form-Item>
          <Form-Item label="职位" prop="idCode">
            <Input style="width: 190px" placeholder="请输入职位" size="large" />
          </Form-Item>
        </Form>
      </div>
    </Modal>
       <Modal  class-name="vertical-center-modal" v-model="deleteModal" width="360">
      <p slot="header" style="color: #6a7997; text-align: center">
        <span style="font-weight: 900">删除联系人</span>
      </p>
      <div style="text-align: center">
        <p>确认要删除当前会员“一个阳”，以及其 联系人“两个阳，三个阳”</p>
      </div>
      <div style="text-align: center" slot="footer">
        <Button type="error">确定</Button>
        <Button @click="deleteModal = false">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteModal:false,
      showModal: false,
      modalTitle: "新增联系人",
      loading: false,
      totalCount: 0,
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      tableData: [
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
        {
          test: "123",
        },
      ],
      tableColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          key: "test",
          title: "姓名",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "电话",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "职位",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "创建时间",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
      ],
    };
  },
  methods: {
    pageChange(page) {
      this.params.pageNum = page;
      // this.getHouseList();
    },
    pageSizeChange(pageSize) {
      this.params.pageNum = 1;
      this.params.pageSize = pageSize;
      // this.getHouseList();
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .ivu-input::-webkit-input-placeholder {
  color: #bac6dd !important;
}
/deep/ .ivu-input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #bac6dd !important;
}
/deep/ .ivu-input::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #bac6dd !important;
}
/deep/ .ivu-input::-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bac6dd !important;
}
</style>