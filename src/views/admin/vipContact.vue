<template>
  <div style="overflow: auto">
    <div class="container-operation">
     <span @click="showModal = true" class="new">新增</span>
      <span @click="showDetailModal = true" class="new">查看</span>
      <span class="new">编辑</span>
      <span @click="deleteModal = true" class="export">删除</span>
      <span class="export">导出</span>
    </div>
    <div class="container-search">
      <Input
        class="input-width"
        size="large"
        placeholder="请输入联系人编号"
        clearable
      />
      <Input
        class="input-width"
        size="large"
        placeholder="请输入联系人姓名"
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
      <Input
        class="input-width"
        size="large"
        placeholder="请输入会员姓名"
        clearable
      />
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
    <Modal   class-name="vertical-center-modal" v-model="showModal" width="520" height="700">
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
          <Form-Item label="性别">
            <RadioGroup>
              <Radio label="男">男</Radio>
              <Radio label="女">女</Radio>
            </RadioGroup>
          </Form-Item>
          <Form-Item label="身份证号码" prop="idCode">
            <Input
              style="width: 190px"
              placeholder="请输入身份证号"
              size="large"
            />
          </Form-Item>
          <Form-Item label="邮箱" prop="idCode">
            <Input style="width: 190px" placeholder="请输入邮箱" size="large" />
          </Form-Item>
          <Form-Item label="住址" prop="idCode">
            <Input style="width: 190px" placeholder="请输入住址" size="large" />
          </Form-Item>
          <Form-Item label="人像" prop="idCode">
            <Input style="width: 190px" size="large" />
          </Form-Item>
        </Form>
      </div>
    </Modal>
    <Modal   class-name="vertical-center-modal" v-model="showDetailModal" width="520" height="700">
      <p slot="header" style="color: #6a7997; text-align: center">
        <span style="font-weight: 900">会员联系人信息</span>
      </p>
      <!-- <div> -->
      <img
        style="width: 33%; vertical-align: top; margin: 0px 10px"
        src="@/assets/img/user.jpg"
        alt=""
      />
      <!-- </div> -->
      <div style="width: 60%; display: inline-block" class="form_box">
        <Form ref="editForm" label-position="right" :label-width="100">
          <Form-Item label="联系人姓名：" prop="name">
            <span>某某</span>
          </Form-Item>
          <Form-Item label="年龄：">
            <span>6</span>
          </Form-Item>
          <Form-Item label="手机号：">
            <span>18888888888</span>
          </Form-Item>
          <Form-Item label="身份证号码：" prop="idCode">
            <span>10001010101012112101</span>
          </Form-Item>
          <Form-Item label="邮箱：" prop="idCode">
            <span>123123@123.com</span>
          </Form-Item>
          <Form-Item label="住址：" prop="idCode">
            <span>广东深圳龙华区</span>
          </Form-Item>
          <Form-Item label="更新时间：" prop="idCode">
            <span>2020-09-01 15：00：00</span>
          </Form-Item>
        </Form>
      </div>
      <div class="detailFooter" slot="footer">
        <span @click="closeDetail">关闭</span>
      </div>
    </Modal>
    <Modal   class-name="vertical-center-modal" v-model="deleteModal" width="360">
      <p slot="header" style="color: #6a7997; text-align: center">
        <span style="font-weight: 900">删除会员联系人</span>
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
      deleteModal: false,
      showDetailModal: false,
      modalTitle: "新增会员",
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
          title: "联系人编号",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "人像",
          align: "center",
          ellipsis: true,
          tooltip: true,
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
          title: "性别",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "年龄",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "身份证号码",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "手机号码",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "关联会员",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "与会员关系",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
      ],
    };
  },
  methods: {
    closeDetail() {
      this.showDetailModal = false;
    },
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
.contactBox {
  margin-top: 15px;
  border-bottom: 1px solid #f0f3fa;
}
.contactBox:last-child {
  border-bottom: none;
}
.op_box {
  display: flex;
  justify-content: space-between;
  .addC {
    display: inline-block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    background: #4977e6;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
}
.form_box {
  .status {
    color: #4977e6;
  }
}
</style>