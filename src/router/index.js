
const App = () => import('@/App') //根组件
const home = () => import('@/pages/home/Home.vue') //所有城市
const city = () => import('@/pages/city/City.vue') //搜索城市
const login = () => import('@/pages/other/Login.vue') //登录
const food = () => import('@/pages/food/Food.vue') //商家列表主页
const search = () => import('@/pages/search/Search.vue') //搜索美食 店家
const shopinfo = () => import('@/pages/shopinfo/ShopInfo.vue') //商家详情
const shopsorting = () => import("@/pages/shopsorting/ShopSorting.vue") //商户排序

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: "",
            redirect: '/home'
        },

        {
            path: '/home',
            component: home,
            meta: { keepAlive: true },
        },
        {
            path: '/city',
            component: city,
            name: 'city',
            meta: { keepAlive: false },
        },
        {
            path: '/login',
            component: login,
            name: 'login',
            meta: { keepAlive: false },
        },
        {
            path: '/food',
            name: 'food',
            component: food,
            meta: { keepAlive: false },
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/shopinfo',
            name: 'shopinfo',
            component: shopinfo
        },
        {
            path: '/shopsorting',
            name: 'shopsorting',
            component: shopsorting,
        }
    ]
}]
