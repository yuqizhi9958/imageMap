<template>
  <div class="table_box">
    <Table
      :show-header="false"
      size="large"
      :columns="columns7"
      :data="data6"
    ></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: "Name",
          align: "center",
          key: "userType",
          render: (h, params) => {
            let arr = [];
            arr.push(
              h("img", {
                attrs: {
                  src:
                    params.row.userType == "会员联系人"
                      ? require("@/assets/img/ssjc_lxr.png")
                      : params.row.userType == "陌生人"
                      ? require("@/assets/img/ssjc_msr.png")
                      : params.row.userType == "班级A"
                      ? require("@/assets/img/ssjc_bj.png")
                      : params.row.userType == "职工"
                      ? require("@/assets/img/ssjc_zg.png")
                      : "",
                },
              })
            );
            arr.push(h("span", params.row.userType));
            return h("div", { class: "tableImg" }, arr);
          },
        },
        {
          key: "pictureUrl",
          title: "人脸抓拍",
          align: "center",
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            let arr = [];
            if (params.row.pictureUrl) {
              arr.push(
                h("img", {
                  attrs: {
                    src: params.row.pictureUrl,
                    style:
                      "width: 60px;height:60px;margin-top:10px;border-radius:50%",
                  },
                  on: {
                    error: () => {
                      params.row.pictureUrl = null;
                    },
                  },
                })
              );
            } else {
              arr.push(h("p", "暂无图片"));
            }

            return h("div", arr);
          },
        },
        {
          title: "Age",
          align: "center",
          key: "status",
          render: (h, params) => {
            let arr = [];
            if (params.row.status == "1") {
              arr.push(
                h("img", {
                  attrs: {
                    src: require("@/assets/img/bad.png"),
                  },
                })
              );
            } else {
              arr.push(
                h("img", {
                  attrs: {
                    src: require("@/assets/img/good.png"),
                  },
                })
              );
            }

            return h("div", arr);
          },
        },

        {
          title: "Address",
          align: "center",
          key: "name",
        },
        {
          title: "Address",
          align: "center",
          key: "temperature",
        },
        {
          title: "Address",
          align: "center",
          key: "passType",
        },
        {
          title: "Address",
          align: "center",
          key: "time",
        },
        {
          title: "Address",
          align: "center",
          key: "date",
        },
      ],
      data6: [
        {
          name: "张先生",
          userType: "会员联系人",
          status: "2",
          passType: "允许通行",
          date: "2020/10/12",
          time: "12:24:32",
          temperature: "36°C",
          pictureUrl:
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        },
        {
          name: "陌生人",
          userType: "陌生人",
          status: "1",
          passType: "陌生拜访",
          date: "2020/10/12",
          time: "12:24:32",
          temperature: "36°C",
          pictureUrl:
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        },
        {
          name: "王小明",
          userType: "班级A",
          status: "2",
          passType: "允许通行",
          date: "2020/10/12",
          time: "12:24:32",
          temperature: "36°C",
          pictureUrl:
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        },
        {
          name: "刘老师",
          userType: "职工",
          status: "2",
          passType: "允许通行",
          date: "2020/10/12",
          time: "12:24:32",
          temperature: "36°C",
          pictureUrl:
            "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.table_box {
  /deep/ {
    .ivu-table {
      color: #52607d !important;
      font-size: 24px !important;
    }
    .ivu-table-large td {
      height: 120px !important;
    }
    .tableImg {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>