import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index'
// const editor = (resolve) => require(['@/views/admin'], resolve)

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})