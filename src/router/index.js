
import Vue from 'vue'
import VueRouter from 'vue-router'
import TableComponent from '../components/Table/TableComponent.vue'
import TheHome from '../pages/TheHome.vue'


Vue.use(VueRouter)

const routes = [
     { path: '/user', component: TableComponent },
     { path: '/', component: TheHome }
]

const router = new VueRouter({
     routes
})

export default router;