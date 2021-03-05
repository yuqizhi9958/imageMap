<template>
  <div style="height: 100%; width: 100%">
    <div v-show="!showmap" id="map"></div>
    <div class="mainbox" v-if="modal1">
      <button @click="modal1 = false">关闭</button>
      <div class="imgbox">
        <img
          @click="modal2 = true"
          ref="marker"
          class="marker"
          style="position: absolute; left: 390px; top: 270px; cursor: pointer"
          src="/img/yuan.png"
          alt=""
          srcset=""
        />

        <!-- <viewer> -->
        <img
          ref="bigImage"
          class="houseimg"
          @mousewheel="rollImg(this)"
          @click="cilckImg($event)"
          src="/img/house.jpg"
          alt=""
          srcset=""
        />
        <!-- </viewer> -->
      </div>
    </div>
    <div class="mainbox" v-if="modal2">
      <button @click="modal2 = false">关闭</button>
      <div class="imgbox">
        <!-- <viewer> -->
        <img
          @click="modal3 = true"
          class="marker1"
          src="/img/yuan.png"
          alt=""
          srcset=""
        />
        <img
          ref="bigImage"
          class="houseimg"
          @click="cilckImg($event)"
          src="/img/testimg.bmp"
          alt=""
          srcset=""
        />
        <!-- </viewer> -->
      </div>
    </div>
    <div class="mainbox" v-if="modal3">
      <button @click="modal3 = false">关闭</button>
      <div class="imgbox">
        <!-- <viewer> -->
        <img
          ref="bigImage"
          class="houseimg"
          @click="cilckImg($event)"
          src="/img/floor.jpg"
          alt=""
          srcset=""
        />
        <!-- </viewer> -->
      </div>
    </div>

    <div v-show="showmap" style="width: 1200px;margin-left: -600px;" id="box">
      <button class="close" @click="showmap = false;scaleSize = 1">关闭</button>
      <div class="map" id="mapBox">
        <img
          class="marker1"
          id="mymarker"
          src="/img/yuan.png"
          alt=""
          srcset=""
        />
        <img
          @click.self="cilckImg($event)"
          src="/img/xq.jpg"
          alt=""
          id="maps"
        />
        <!-- <img src="/img/map.gif" alt="" id="maps" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scaleSize: 1,
      showmap: false,
      modal1: false,
      modal2: false,
      modal3: false,
      showimg: false,
      bigeMap: undefined,
      BigeMapStylePath: "bigemap.8ivmnyrh",
      BigeMapUrl: "https://bigemap.bcdat.com:3000",
    };
  },

  methods: {
    ok() {},
    cancel() {},
    cilckImg(e) {
      // this.showimg = true;
      console.log(e.offsetX, e.offsetY, "eee");
      var box = document.getElementById("box");
      var map = document.getElementById("mapBox");
      var box_width = parseFloat(
        window.getComputedStyle(box, false)["width"].slice(0, -2)
      );
      var box_height = parseFloat(
        window.getComputedStyle(box, false)["height"].slice(0, -2)
      );
      var map_width = parseFloat(
        window.getComputedStyle(map, false)["width"].slice(0, -2)
      );
      var map_height = parseFloat(
        window.getComputedStyle(map, false)["height"].slice(0, -2)
      );
      let mapbox = document.getElementById("mapBox");
      console.log(this.scaleSize, "scaleSize");
      let img = document.createElement("img");
      img.classList.add("marker1");
      img.style.zoom = this.scaleSize;
      img.src = "/img/yuan.png";
      img.style.position = "absolute";
      img.style.left = e.offsetX / this.scaleSize - 8 + "px";
      img.style.top = e.offsetY / this.scaleSize - 8 + "px";
      img.style.cursor = "pointer";
      map.appendChild(img);

      //  存储原始XY位置
      //  x / scaleSize
      //  y / scaleSize
    },
    rollImg() {
      console.log("111", this.$refs.bigImage.style);
      /* 获取当前页面的缩放比
            若未设置zoom缩放比，则为默认100%，即1，原图大小
        */
      var zoom = parseInt(this.$refs.bigImage.style.zoom) || 100;
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom
            wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动
        */
      zoom += event.wheelDelta / 12;
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 50 && zoom < 350) {
        let num = zoom - 100;
        this.$refs.marker.style.left = 100;
        // console.log(document.getElementsByClassName("marker"), "1111");
        console.log(this.$refs.marker.style, zoom, "this.$refs.marker.style");
        this.$refs.marker.style.left = 390 * (zoom / 100) + "px";
        this.$refs.marker.style.top = 270 * (zoom / 100) + "px";
        this.$refs.bigImage.style.zoom = zoom + "%";
        // this.$refs.marker.style.zoom = zoom + "%";
      }
      return false;
    },
    init() {
      let newArray = {
        value: {
          lat: 27.71311247125525,
          lng: 109.17957477271558,
        },
      };
      BM.Config.HTTP_URL = this.BigeMapUrl;
      this.bigeMap = BM.map("map", this.BigeMapStylePath, {
        center: [newArray.value.lat, newArray.value.lng],
        zoom: 17,
        attributionControl: false,
        zoomControl: false,
      });
      var myIconPlace = BM.icon({
        iconUrl: "/img/yuan.png",
        iconSize: [34],
        iconAnchor: [22, 60],
        // popupAnchor: [-3, -76]
      });
      let index = BM.marker([newArray.value.lat, newArray.value.lng], {
        icon: myIconPlace,
      }).addTo(this.bigeMap);
      index.on("click", (e) => {
        this.showmap = true;
        setTimeout(() => {
          this.initBox();
        }, 100);
      });
    },
    initBox() {
      var box = document.getElementById("box");
      var img = new Image();
      img.src = "/img/xq.jpg";
      console.log("width:" + img.width + ",height:" + img.height);
      if (img.width > 1200) {
        box.style.width = '1200px';
        box.style.marginLeft = '-600px';
      } else {
        box.style.width = img.width+'px';
        box.style.marginLeft = '-' + img.width/2+'px';
      }
      console.log(box.style, "box.style");
      var map = document.getElementById("mapBox");
      var mymarker = document.getElementsByClassName("marker1");
      var isRun, // 是否可移动
        startX, // 鼠标落下的位置
        startY,
        endX, // 鼠标放开的位置
        endY,
        rX, // 图片最终的位置（中间量）
        rY,
        scaleSize = 1, // 缩放比例
        bgX = 0, // left   图片的最终位置
        bgY = 0; // top
      var box_width = parseFloat(
        window.getComputedStyle(box, false)["width"].slice(0, -2)
      );
      var box_height = parseFloat(
        window.getComputedStyle(box, false)["height"].slice(0, -2)
      );
      var map_width = parseFloat(
        window.getComputedStyle(map, false)["width"].slice(0, -2)
      );
      var map_height = parseFloat(
        window.getComputedStyle(map, false)["height"].slice(0, -2)
      );

      function restart() {
        // 初始设置显示全部地图
        var map_w, map_h;
        if (box_width / box_height > map_width / map_height) {
          // 此时以高为基准
          scaleSize = box_height / map_height;
          map_h = box_height;
          map_w = map_width * scaleSize;
          bgX = (box_width - map_w) / 2;
          bgY = 0;
        } else {
          // 此时以宽为基准
          scaleSize = box_width / map_width;
          map_h = map_height * scaleSize;
          map_w = box_width;
          bgX = 0;
          bgY = (box_height - map_h) / 2;
        }
        map.style.height = map_h + "px";
        map.style.width = map_w + "px";
        map.style.top = bgY + "px";
        map.style.left = bgX + "px";
      }

      restart();
      box.onmousedown = function (ev) {
        if (ev.which === 1) {
          // 鼠标左键
          isRun = true;
          startX = ev.pageX;
          startY = ev.pageY;
          return false;
        }
        if (ev.which === 2) {
          restart();
          return false;
        }
      };
      box.onmouseup = function (ev) {
        if (ev.which === 1) {
          isRun = false;
          bgX = rX;
          bgY = rY;
        }
        return false;
      };
      box.onmousemove = function (ev) {
        if (ev.which === 1 && isRun) {
          endX = ev.pageX;
          endY = ev.pageY;
          rX = bgX + endX - startX;
          rY = bgY + endY - startY;
          map.style.left = rX + "px";
          map.style.top = rY + "px";
        }
      };
      box.onwheel = (ev) => {
        // 以鼠标为中心缩放

        // 1.记录鼠标当前位置（相对于window）
        var x = ev.pageX;
        var y = ev.pageY;
        // 2.阻止默认事件
        ev.preventDefault();
        // ev.target  滚轮滑动的目标
        // 3.计算出鼠标相对于地图的位置
        x = x - box.offsetLeft;
        y = y - box.offsetTop;
        // 4.记录滚轮的变化值 -100/+100
        var change_scale = -ev.deltaY / 1000;
        console.log(current_scale, "current_scale");
        var current_scale = scaleSize;
        current_scale += change_scale;
        // 5.限制缩放的倍数0.1-10
        current_scale =
          current_scale < 0.1 ? 0.1 : current_scale > 10 ? 10 : current_scale;

        // 6.计算出相对于图片的同样倍数对应的位移距离
        bgX = bgX - ((x - bgX) * (current_scale - scaleSize)) / scaleSize;
        bgY = bgY - ((y - bgY) * (current_scale - scaleSize)) / scaleSize;
        scaleSize = current_scale;
        this.scaleSize = scaleSize;
        // 7.更新属性
        map.style.width = map_width * scaleSize + "px";
        map.style.height = map_height * scaleSize + "px";
        map.style.top = bgY + "px";
        map.style.left = bgX + "px";
        console.log(scaleSize, "scaleSize");
        for (let i = 0; i < mymarker.length; i++) {
          mymarker[i].style.zoom = scaleSize;
        }
        // mymarker.style.left = map_width * (scaleSize / 100) + "px";
        // mymarker.style.top = map_height * (scaleSize / 100) + "px";
        // 注意：要求box标签的父级标签不能出现定位属性，否则会以出现定位属性的父级为基准计算offset
      };
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
#map {
  margin: 0;
  padding: 0px;
  background-color: #00141d;
  height: 100%;
  width: 100%;
}
.houseimg {
  // width: 100%;
}
.imgbox {
  position: fixed;
}
.marker {
  // position: absolute;
  // left: 350px;
  // top: 250px;
  // cursor: pointer;
}
.marker1 {
  position: absolute;
  left: 450px;
  top: 310px;
  cursor: pointer;
}
.mainbox {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border: 10px solid rgb(87, 84, 84);
  border-radius: 4px;
}

#box {
  position: relative;
  
  height: 900px;
  background-color: rosybrown;
  overflow: hidden;
  left: 50%;
  
}
#imgBox {
  position: relative;
  border: 1px solid #000;
}
.map {
  position: absolute;
  border: 1px solid #000;
}
#maps {
  width: 100%;
  height: 100%;
}
.close {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}
</style>