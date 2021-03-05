import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import App from './App.vue';
import router from './router';
import store from './store';
import echarts from 'echarts';
import '@/assets/css/common.scss';
import '@/assets/js/plugins/iview.js';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';

Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: 'data-source',
  },
});


// 图片加载错误指令
import imgHandleInit from '@/directive/imgHandle';
imgHandleInit(Vue);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

import Router from 'vue-router';
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

window.Vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
