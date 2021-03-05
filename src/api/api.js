import jsonhttp from '@/assets/js/plugins/jsonhttp'
import formhttp from '@/assets/js/plugins/formhttp'

// api地址
const HOST = '/api/rest'
// const HOST = ''

// SysLogin - 用户登录
function login(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/login', data).then(resolve).catch(reject)
    })
}

function captcha(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/captcha.jpg?t=' + data).then(resolve).catch(reject)
    })
}

// 省份
function findProvince() {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/area/findProvince').then(resolve).catch(reject)
    })
}
// 城市
function findCity(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/area/findCity?pid=' + data).then(resolve).catch(reject)
    })
}
// 区县
function findCountry(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/area/findCountry?pid=' + data).then(resolve).catch(reject)
    })
}
//街道
function findStreet(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/area/findStreet?pid=' + data).then(resolve).catch(reject)
    })
}

// AreaModel - 创建小区模型
function addAreaModel(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/areaModelConfig/save', data).then(resolve).catch(reject)
    })
}

// AreaModel - 生成小区信息
function createAreaModel(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaModelConfig/create', { params: data }).then(resolve).catch(reject)
    })
}

// AreaModel - 获取小区信息-用于切换小区
function getAreaInfos() {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaModelConfig/getAreaInfos').then(resolve).catch(reject)
    })
}

// AreaTree - 修改当前节点名称编号
function areaTreeUpdate(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/update', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 用于在房屋模型中删除区栋单元层室
function delByNodeId(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/delByNodeId', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 获取根节点
function getRoot(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getRoot', { params: data }).then(resolve).catch(reject)
    })
}


// AreaTree - 获取小区中的所有分区(包含根节点信息)
function getAreas(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getAreas', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 获取分区下的楼栋信息
function getHouses(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getHouses', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 获取栋下的单元信息
function getUnits(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getUnits', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 获取单元下的层
function getFloors(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getFloors', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 获取层中房屋信息
function getRooms(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/getRooms', { params: data }).then(resolve).catch(reject)
    })
}

// AreaTree - 添加节点
function addNode(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/areaTree/addNode', { params: data }).then(resolve).catch(reject)
    })
}


// House - 楼栋信息查询
function houseFindPage(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/houseInfo/findPage', data).then(resolve).catch(reject)
    })
}

// House - 楼栋信息添加/更新
function houseSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/houseInfo/save', data).then(resolve).catch(reject)
    })
}

// House - 删除楼栋信息
function houseDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/houseInfo/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// Room - 房屋信息查询
function roomFindPage(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/roomInfo/findPage', data).then(resolve).catch(reject)
    })
}

// Room - 房屋信息添加/更新
function roomSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/roomInfo/save', data).then(resolve).catch(reject)
    })
}

// Room - 房屋删除
function roomDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/roomInfo/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// 住户 -  列表查询
function userListPage(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/personInfo/findPage', data).then(resolve).catch(reject)
    })
}
//Person - 住户信息添加/更新
function addHousehold(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/personInfo/save', data).then(resolve).catch(reject);
    });
}
// 住户 -  根据uuid查询住户房屋信息
function findByPersonUuid(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/personInfo/findByPersonUuid', { params: data }).then(resolve).catch(reject)
    })
}


// 门卡列表查询
function doorCardListPage(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/doorCardList/findPage', data).then(resolve).catch(reject)
    })
}

// 门卡列表添加
function saveDoorCard(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/doorCardList/save', data).then(resolve).catch(reject)
    })
}

// 门卡列表注销
function doorCardDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/doorCardList/deleteById', { params: data }).then(resolve).catch(reject)
    })
}


// 检测人脸
function checkFaceImg(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post('/personFace/detect', data).then(resolve).catch(reject)
    })
}

// 上传图片
function upImg(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/file', data).then(resolve).catch(reject)
    })
}


//SysMenu - 查询菜单
function findMenuTree() {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/menu/findMenuTree').then(resolve).catch(reject)
    })
}

//SysMenu - 根据用户名查询默认菜单
function findNavTree(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/menu/findNavTree', { params: data }).then(resolve).catch(reject)
    })
}
// SysMenu - 菜单添加/更新
function menuSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/menu/save', data).then(resolve).catch(reject)
    })
}

// SysMenu - 菜单删除
function menuDel(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/menu/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// SysDept - 部门级联关系查询（树）
function findDeptTree() {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/dept/findTree').then(resolve).catch(reject)
    })
}

// SysDept - 部门添加/更新
function saveDeptTree(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/dept/save', data).then(resolve).catch(reject)
    })
}

// SysDept - 部门删除
function deleteDeptTree(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/dept/deleteById', { params: data }).then(resolve).catch(reject)
    })
}


//SysUser - 用户信息查询
function sysUserList(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/user/findPage', data).then(resolve).catch(reject)
    })
}

// SysUser - 根据名称查找权限
function findPermissions(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/user/findPermissions', { params: data }).then(resolve).catch(reject)
    })
}

//SysUser - 用户信息添加
function sysUserSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/user/save', data).then(resolve).catch(reject)
    })
}

//SysUser - 用户信息删除
function sysUserDel(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/user/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// SysRole - 角色信息查询
function sysRoleList(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/role/findPage', data).then(resolve).catch(reject)
    })
}

// SysRole - 角色信息删除
function sysRoleDel(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/role/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// SysRole - 角色信息保存
function sysRoleSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/role/save', data).then(resolve).catch(reject)
    })
}

// SysRole - 根据角色ID获取菜单
function findRoleMenus(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/role/findRoleMenus', { params: data }).then(resolve).catch(reject)
    })
}

// SysRole - 角色菜单信息保存
function saveRoleMenus(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/role/saveRoleMenus', data).then(resolve).catch(reject)
    })
}

// AddressBook - 通讯录信息添加/更新
function saveAddressBook(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/addressBook/save', data).then(resolve).catch(reject)
    })
}

// AddressBook - 通讯录信息查询
function getAddressBook(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/addressBook/findPage', data).then(resolve).catch(reject)
    })
}


// AddressBook - 通讯录信息删除
function delAddressBook(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/addressBook/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

// LoginLog - 登录日志查询
function loginLog(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/loginLog/findPage', data).then(resolve).catch(reject)
    })
}

//IpCamera - 摄像头信息添加/更新
function ipCameraSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/ipCamera/save', data).then(resolve).catch(reject)
    })
}

//IpCamera - 摄像头列表查询
function getIpCamera(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/ipCamera/findPage', data).then(resolve).catch(reject)
    })
}

//IpCamera - 摄像头信息删除
function cameraDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/ipCamera/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

//elevatorContro - 梯控设备信息添加/更新
function elevatorControSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/elevatorContro/save', data).then(resolve).catch(reject)
    })
}

//elevatorContro - 梯控设备列表查询
function getElevatorContro(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/elevatorContro/findPage', data).then(resolve).catch(reject)
    })
}

//elevatorContro - 梯控设备信息删除
function elevatorControDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/elevatorContro/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

//carControl - 车闸信息添加/更新
function carControlSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/carControl/save', data).then(resolve).catch(reject)
    })
}

//carControl - 车闸列表查询
function getCarControl(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/carControl/findPage', data).then(resolve).catch(reject)
    })
}

//carControl - 车闸信息删除
function carControlDeleteById(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/carControl/deleteById', { params: data }).then(resolve).catch(reject)
    })
}

//SysLog - 系统日志查询
function sysLogPage(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/log/findPage', data).then(resolve).catch(reject)
    })
}


//StatisticalResult - 小区数据统计查询
function findCountData(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/statisticalResult/findCountData', { params: data }).then(resolve).catch(reject)
    })
}

//StatisticalResult - 人车记录统计查询
function findFlowData(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/statisticalResult/findFlowData', { params: data }).then(resolve).catch(reject)
    })
}

//StatisticalResult - 人车记录统计查询
function camPtz(data) {
    return new Promise((resolve, reject) => {
        formhttp.post('/dvss/dvss', data).then(resolve).catch(reject)
    })
}


// 天气预报接口
function weather(data) {
    return new Promise((resolve, reject) => {
        formhttp.get('/api', { params: data }).then(resolve).catch(reject)
    })
}

//小区详情查询
function getCommInfo(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.get(HOST + '/communityInfo/findDetail', { params: data }).then(resolve).catch(reject)
    })
}

//FunctionConfig - 功能配置查询
function functionConfig(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/functionConfig/findPage', data).then(resolve).catch(reject)
    })
}

//FunctionConfig - 功能配置添加
function functionConfigSave(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/functionConfig/save', data).then(resolve).catch(reject)
    })
}

//doorOpenRecord - 人员开门记录
function doorOpenRecord(data) {
    return new Promise((resolve, reject) => {
        jsonhttp.post(HOST + '/doorOpenRecord/findPage', data).then(resolve).catch(reject)
    })
}

export default {
    login,
    captcha,
    addAreaModel,
    createAreaModel,
    getAreaInfos,
    areaTreeUpdate,
    delByNodeId,
    getRoot,
    getAreas,
    getHouses,
    getFloors,
    getRooms,
    getUnits,
    addNode,
    findProvince,
    findCity,
    findCountry,
    findStreet,
    houseFindPage,
    houseSave,
    houseDeleteById,
    roomFindPage,
    roomSave,
    roomDeleteById,
    userListPage,
    doorCardListPage,
    saveDoorCard,
    doorCardDeleteById,
    findByPersonUuid,
    checkFaceImg,
    upImg,
    findMenuTree,
    findDeptTree,
    saveDeptTree,
    deleteDeptTree,
    findNavTree,
    menuSave,
    menuDel,
    sysUserList,
    sysUserSave,
    sysUserDel,
    sysRoleList,
    sysRoleDel,
    sysRoleSave,
    findRoleMenus,
    saveRoleMenus,
    saveAddressBook,
    getAddressBook,
    delAddressBook,
    loginLog,
    ipCameraSave,
    getIpCamera,
    cameraDeleteById,
    elevatorControSave,
    getElevatorContro,
    elevatorControDeleteById,
    carControlSave,
    getCarControl,
    carControlDeleteById,
    sysLogPage,
    findPermissions,
    findCountData,
    findFlowData,
    weather,
    camPtz,
    getCommInfo,
    functionConfig,
    functionConfigSave,
    addHousehold,
    doorOpenRecord
}