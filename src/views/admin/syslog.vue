<template>
  <div style="overflow: auto">
    <h2 style="margin-bottom: 10px">操作日志</h2>
    <div class="container-search">
      <Input
        class="input-width"
        size="large"
        placeholder="请输入用户"
        clearable
      />
      <DatePicker
        type="daterange"
        size="large"
        placement="bottom-end"
        placeholder="请选择时间 "
      ></DatePicker>
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
          key: "test",
          title: "用户",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "操作",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "操作详情",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test1",
          title: "登录IP",
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