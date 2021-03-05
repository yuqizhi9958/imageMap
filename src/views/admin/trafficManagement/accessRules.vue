<template>
  <div style="overflow: auto">
    <div class="container-operation">
      <span class="export">添加</span>
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
        }
      ],
      tableColumns: [
        {
          key: "test",
          title: "产品名称",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "test",
          title: "产品ID",
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
          title: "协议类型",
          align: "center",
          ellipsis: true,
          tooltip: true,
        },
        {
          key: "operate",
          title: "操作",
          align: "center",
          maxWidth: 150,
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            let arr = [];
              arr.push(
                h(
                  "span",
                  {
                    class: "c-76A3ED c-p",
                    on: {
                      click: () => {
                       
                      },
                    },
                  },
                  "查看"
                )
              );
              arr.push(
                h(
                  "span",
                  {
                    class: "c-F35858 ml10 c-p",
                    on: {
                      click: () => {
                       
                      },
                    },
                  },
                  "删除"
                )
              );
            return h("div", arr);
          },
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