import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    {
        path:"/totalTips",
        component: () => import ('./components/totalTips/index.vue'),
    },
    {
        path:"/home",
        component: () => import ('./components/home/index.vue'),
    },
    // 重定向
    {
        path: '/', 
        redirect: '/totalTips' 
    }
];
const router = new VueRouter({
	routes
});

export default router;



