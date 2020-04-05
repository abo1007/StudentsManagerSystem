import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login.vue';
import manager from "../components/manager";
import managerAll from "../components/managerAll";
import managerAdd from "../components/managerAdd";
import managerDel from "../components/managerDel";
import managerSel from "../components/managerSel";
import managerAbout from "../components/managerAbout";
import managerUpdate from "../components/managerUpdate";
import publicPage from "../components/publicPage";

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/', component: login  ,meta:{title:'学生管理系统-登陆'}},
    {path:'/login', component: login , meta:{title:'学生管理系统-登陆'}},
    {path:'/public', component: publicPage , meta:{title:'学生管理系统-展示页'}},
    {path:'/manager', component: manager , meta:{title:'学生管理系统-主页'},children:[
        {path:'/manager',component: managerAll , meta:{title:'学生管理系统-主页'}},
        {path:'/managerAll',component: managerAll , meta:{title:'学生管理系统-总览'}},
        {path:'/managerAdd',component: managerAdd , meta:{title:'学生管理系统-添加'}},
        {path:'/managerDel',component: managerDel , meta:{title:'学生管理系统-删除'}},
        {path:'/managerSel',component: managerSel , meta:{title:'学生管理系统-查询'}},
        {path:'/managerAbout',component: managerAbout , meta:{title:'学生管理系统-关于'}},
        {path:'/managerUpdate',component: managerUpdate , meta:{title:'学生管理系统-修改'}}

      ]
    }
  ]
});
