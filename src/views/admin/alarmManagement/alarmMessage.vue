<template>
  <div style="overflow: auto">
    <div class="container-search">
      <Select clearable placeholder="报警设备">
        <Option value="1">人员类型1</Option>
        <Option value="2">人员类型2</Option>
      </Select>
      <Input
        class="input-width"
        size="large"
        placeholder="请输入报警触发人"
        clearable
      />
      <Input
        class="input-width"
        size="large"
        placeholder="请输入身份证号码"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      totalCount: 0,
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      tableData: [
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
        },
        {
          test: "123123123123123123123123123123123123123123123123",
          test1: "111",
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
          title: "消息内容",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "报警时间",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "报警设备",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "报警触发人",
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

<style>
</style>