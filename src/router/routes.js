/**
 * Created by baird on 2016/12/30.
 */
/*
import Login from '../page/loginregistration/Login'
import Regis from '../page/loginregistration/Regis'
import App from '../App'
// import Main from '../page/Main'
import MainView from '../page/mainview/Main'
import Reading from '../page/mainview/Reading'
import Setting from '../page/mainview/Setting'
import Timeline from '../page/mainview/Timeline.vue'
import Newpage from '../page/record/Newpage'
//录入的路由。
import Birthrecords from '../page/record/Birthrecords'
import Birthrecords2 from '../page/record/Birthrecords2'
import Baseinfo from '../page/record/Baseinfo'
import Familytree from '../page/record/Familytree'
//详细页面的路由
import Recorddetails from '../page/recorddetails/Recorddetails'
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Login = resolve => require(['../page/loginregistration/Login'], resolve)
const Regis = resolve => require(['../page/loginregistration/Regis'], resolve)
const MainView = resolve => require(['../page/mainview/Main'], resolve)
const Reading = resolve => require(['../page/mainview/Reading'], resolve)
const Setting = resolve => require(['../page/mainview/Setting'], resolve)

const Timeline = resolve => require(['../page/mainview/Timeline'], resolve)
const Newpage = resolve => require(['../page/record/Newpage'], resolve)
const Birthrecords = resolve => require(['../page/record/Birthrecords'], resolve)
const Baseinfo = resolve => require(['../page/record/Baseinfo'], resolve)
const Familytree = resolve => require(['../page/record/Familytree'], resolve)
const Recorddetails = resolve => require(['../page/recorddetails/Recorddetails'], resolve)

//test Router
const NewBabyRecord = resolve => require(['../page/recorddetails/NewBabyRecord'], resolve)
const Birthrecords2 = resolve => require(['../page/record/Birthrecords2'], resolve)
//路由配置
const routes = [
    {
        path: '/', component: App,
        children: [
            {path: '', component: MainView, meta: {keepAlive: true}},
            {path: '/login', component: Login},
            {path: '/Reading', component: Reading},
            {path: '/setting', component: Setting, meta: {keepAlive: true}},
            {path: '/regis', component: Regis},
            {path: '/timeline', component: Timeline, meta: {keepAlive: true}},
            {path: '/timeline/recorddetails:title', component: Recorddetails, name: 'recorddetails'},//数据详细页面。
            {path: 'mainview/record', component: Newpage, name: 'record'},
            {path: 'mainview/birthrecord:title', component: Birthrecords, name: 'birthrecords'},//宝宝出生记录。
            {path: 'mainview/baseinfo:title', component: Baseinfo, name: 'baseinfo'},//宝宝基本信息。
            {path: 'mainview/familytree', component: Familytree, name: 'familytree'},//家庭树。

            //test Router
            {path: 'mainview/test', component: Birthrecords2, name: 'birthrecords2'},//宝宝出生记录。
            {path: 'recorddetails/newbabyrecord', component: NewBabyRecord, name: 'newbabyrecord'},//新生儿喂养7天记录
        ]
    }
];
const router = new VueRouter({
    routes
})
export  default router
