import asyncLoader from './asyncLoaderConfig'
const Index = asyncLoader(() => import('../pages/Index'));
const Main = asyncLoader(() => import('../pages/Main'))
const MainList = asyncLoader(() => import('../pages/MainList'))
// 嵌套路由相关请在具体组件中进一步处理 
// 也就是在具体组件中再引入组件吧
// 这个全局的根本做不到这件事，拆分后不可能
const route = [
    {
        path:'/',
        component:Index,
        exact:true
    },
    {
        path:'/main',
        component:Main,
        exact:false,
    },
]
export default route;