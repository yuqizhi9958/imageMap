<template>
  <div style="overflow: auto">
    <div class="container-operation">
      <span @click="showModal = true" class="new">新增</span>
      <span class="new">查看</span>
      <span class="new">编辑</span>
      <span @click="deleteModal = true" class="export">删除</span>
      <span class="export">导入</span>
      <span class="export">导出</span>
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
        placeholder="请输入身份证号码"
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
      width="800"
      height="700"
    >
      <p slot="header" style="color: #6a7997; text-align: center">
        <span style="font-weight: 900">{{ modalTitle }}</span>
      </p>
      <div class="form_box">
        <Form ref="editForm" label-position="right" :label-width="120">
          <div>
            <span class="formTitle">会员信息</span>
          </div>
          <Form-Item label="设备名称" prop="idType">
            <Input style="width: 190px" placeholder="请输入姓名" size="large" />
          </Form-Item>
          <Form-Item label="设备类型" prop="name">
            <Select
              style="width: 190px"
              class="input-width"
              size="large"
              placeholder="请选择"
              clearable
            >
              <Option :value="1">班级</Option>
              <Option :value="2">班级</Option>
            </Select>
          </Form-Item>
          <Form-Item label="业务编码">
            <Input style="width: 190px" placeholder="请输入电话" size="large" />
          </Form-Item>
          <Form-Item label="厂商名称">
            <Input style="width: 190px" placeholder="请输入电话" size="large" />
          </Form-Item>
          <Form-Item label="序列号" prop="idCode">
            <Input
              style="width: 190px"
              placeholder="请输入身份证号"
              size="large"
            />
          </Form-Item>
          <Form-Item label="品牌型号" prop="idCode">
            <Input
              style="width: 190px"
              placeholder="请输入身份证号"
              size="large"
            />
          </Form-Item>
          <Form-Item label="设备编号" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="软件版本" prop="idCode">
            <Input style="width: 190px" placeholder="请输入住址" size="large" />
          </Form-Item>
          <Form-Item label="硬件版本" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="IP地址" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="IPV6地址" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="网络端口号" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="MAC地址" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
          <Form-Item label="有无子设备" prop="idCode">
            <RadioGroup>
              <Radio label="1">有</Radio>
              <Radio label="2">无</Radio>
            </RadioGroup>
          </Form-Item>
          <Form-Item label="子设备标识" prop="idCode">
            <RadioGroup>
              <Radio label="1">是子设备</Radio>
              <Radio label="2">不是子设备</Radio>
            </RadioGroup>
          </Form-Item>
          <Form-Item label="子设备上级设备" prop="idCode">
            <Select
              style="width: 190px"
              class="input-width"
              size="large"
              placeholder="请选择"
              clearable
            >
              <Option :value="1">班级</Option>
              <Option :value="2">班级</Option>
            </Select>
          </Form-Item>
          <div class="op_box">
            <span class="formTitle">地理位置</span>
          </div>
          <div>
            <Form-Item label="地理位置" prop="idCode">
              <Input style="width: 190px" size="large" />
            </Form-Item>
            <Form-Item label="高度" prop="idCode">
              <Input style="width: 190px" size="large" />
            </Form-Item>
            <Form-Item label="设备位置" prop="idCode">
              <Input style="width: 190px" size="large" />
            </Form-Item>
          </div>
        </Form>
      </div>
    </Modal>
    <Modal class-name="vertical-center-modal" v-model="deleteModal" width="360">
      <p slot="header" style="color: #6a7997; text-align: center">
        <span style="font-weight: 900">删除会员</span>
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
      modalTitle:'123',
      showModal: false,
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
          title: "设备别名",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "设备名称",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "序列号",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "设备类型",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "设备位置",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "状态",
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
.form_box /deep/ .ivu-form-item {
  margin-bottom: 10px;
  width: 50%;
  display: inline-block;
}
</style>