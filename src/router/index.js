import Vue from 'vue';
import Router from 'vue-router';
const Admin = () => import('@/views/admin');
const adminLogin = () =>
  import('@/views/admin/login');
const Index = () =>
  import('@/views/admin/index');
const accessRecords = () =>
  import('@/views/admin/accessRecords');
const researchersTrack = () =>
  import('@/views/admin/researchersTrack');
const vipManagement = () =>
  import('@/views/admin/vipManagement');
const vipContact = () =>
  import('@/views/admin/vipContact');
const roleManagement = () =>
  import('@/views/admin/roleManagement');
const accountManagement = () =>
  import('@/views/admin/accountManagement');
  const syslog = () =>
  import('@/views/admin/syslog');
  
const staffManagement = () =>
  import('@/views/admin/staffManagement');
const trafficManagement = () =>
  import('@/views/admin/trafficManagement');
const deviceManagement = () =>
  import('@/views/admin/deviceManagement');
const alarmManagement = () =>
  import('@/views/admin/alarmManagement');
const record = () =>
  import('@/views/admin/trafficManagement/accessRecord');
const photoRecords = () =>
  import('@/views/admin/trafficManagement/photoRecords');
const accessRules = () =>
  import('@/views/admin/trafficManagement/accessRules');
const accessTip = () =>
  import('@/views/admin/trafficManagement/accessTip');
const accessControl = () =>
  import('@/views/admin/deviceManagement/accessControl');
const braceletEquipment = () =>
  import('@/views/admin/deviceManagement/braceletEquipment');
const monitoringEquipment = () =>
  import('@/views/admin/deviceManagement/monitoringEquipment');
const alarmMessage = () =>
  import('@/views/admin/alarmManagement/alarmMessage');
const alarmRules = () =>
  import('@/views/admin/alarmManagement/alarmRules');
const alarmContact = () =>
  import('@/views/admin/alarmManagement/alarmContact');
Vue.use(Router);
const routes = [
  {
    path: '/login',
    name: 'login',
    component: adminLogin,
  },
  {
    path: '/',
    name: 'admin',
    component: Admin,
    redirect: '/admin/trafficManagement/accessRecord',
    children: [
      {
        path: 'admin/index',
        name: 'index',
        component: Index,
      },
      {
        path: 'admin/accessRecords',
        name: 'accessRecords',
        component: accessRecords,
      },
      {
        path: 'admin/researchersTrack',
        name: 'researchersTrack',
        component: researchersTrack,
      },
      {
        path: 'admin/vipManagement',
        name: 'vipManagement',
        component: vipManagement,
      },
      {
        path: 'admin/vipContact',
        name: 'vipContact',
        component: vipContact,
      },
      {
        path: 'admin/roleManagement',
        name: 'roleManagement',
        component: roleManagement,
      },
      {
        path: 'admin/accountManagement',
        name: 'accountManagement',
        component: accountManagement,
      },
      {
        path: 'admin/syslog',
        name: 'syslog',
        component: syslog,
      },
      
      {
        path: 'admin/staff',
        name: 'staffManagement',
        component: staffManagement,
      },
      {
        path: 'admin/trafficManagement',
        name: 'trafficManagement',
        component: trafficManagement,
        redirect: '/admin/trafficManagement/accessRecord',
        children: [
          {
            path: '/admin/trafficManagement/accessRecord',
            name: 'records',
            component: record,
          },
          {
            path: '/admin/trafficManagement/photoRecords',
            name: 'photoRecords',
            component: photoRecords,
          },
          {
            path: '/admin/trafficManagement/accessRules',
            name: 'accessRules',
            component: accessRules,
          },
          {
            path: '/admin/trafficManagement/accessTip',
            name: 'accessTip',
            component: accessTip,
          }
        ]
      },
      {
        path: 'admin/deviceManagement',
        name: 'deviceManagement',
        component: deviceManagement,
        redirect: '/admin/deviceManagement/accessControl',
        children: [
          {
            path: '/admin/deviceManagement/accessControl',
            name: 'accessControl',
            component: accessControl,
          },
          {
            path: '/admin/deviceManagement/braceletEquipment',
            name: 'braceletEquipment',
            component: braceletEquipment,
          },
          {
            path: '/admin/deviceManagement/monitoringEquipment',
            name: 'monitoringEquipment',
            component: monitoringEquipment,
          }
        ]
      },
      {
        path: 'admin/alarmManagement',
        name: 'alarmManagement',
        component: alarmManagement,
        redirect: '/admin/alarmManagement/alarmMessage',
        children: [
          {
            path: '/admin/alarmManagement/alarmMessage',
            name: 'alarmMessage',
            component: alarmMessage,
          },
          {
            path: '/admin/alarmManagement/alarmRules',
            name: 'alarmRules',
            component: alarmRules,
          },
          {
            path: '/admin/alarmManagement/alarmContact',
            name: 'alarmContact',
            component: alarmContact,
          }
        ]
      },
    ],
  },
];

const router = new Router({
  // base: '/',
  mode: 'hash',
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   const HTToken = sessionStorage.getItem('KSHWLWGAGKPT');
//   if (to.path === '/login' || HTToken) {
//     next();
//   } else {
//     next({
//       path: '/login',
//     });
//   }
// });

export default router;
