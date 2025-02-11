const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
    // menuRender: false,
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
    // menuRender: false,
  },
  {
    name: 'JSON 示例',
    path: '/Json',
    component: './Json',
    // menuRender: false,
  },
  {
    name: 'FormList嵌套 示例',
    path: '/List',
    component: './List',
    // menuRender: false,
  },
  {
    name: 'dva 示例',
    path: '/dva',
    component: './Dva',
    // menuRender: false,
  },
  {
    name: '下拉框',
    path: '/select',
    component: './Select',
    // menuRender: false,
  },
  {
    name: 'form',
    path: '/form',
    component: './Form',
  },
  {
    name: '水波',
    path: '/waterBall',
    component: './WaterBall',
  },
]

export default routes
