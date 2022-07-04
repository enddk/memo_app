import { createRouter, createWebHistory } from 'vue-router'
import Memo_top from './components/Memo_top.vue'
import Memo_detail from './components/Memo_detail.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'top',
            component: Memo_top,
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Memo_detail,
            props: true
        },
    ],
})