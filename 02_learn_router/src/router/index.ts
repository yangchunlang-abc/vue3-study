import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'
 import home from '../view/Home.vue'
 import son from '../view/Son.vue'
const me = ()=>  import('../view/Me.vue') //设置路由懒加载，分包
const router = createRouter({
  routes: [
    { path: "/", redirect:"/home"},
    {
      path: "/home",
      component: home,
      children:[{path:'son',component:son}]         //子组件不显示
    },
    { path: "/me", component: me },
    {path:"/user",component:()=>import('../view/User.vue')},
    // 设置404界面
    { path: '/:pathMatch(.*)*',component:()=>import('../view/NotFound.vue')}
  ],
  //history: createWebHashHistory() //哈希模式，路径有#号
  history:createWebHistory() // 没有#号
})
// 设置路由守卫
// router.beforeEach((to,from) => {
//   if (to.path != '/user') {
//     return {path:'/user'}
//   }
// })
export default router