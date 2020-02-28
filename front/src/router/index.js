import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/container'
import ListCampaign from '../components/campaigns/list'
import FormCampaign from '../components/campaigns/form'
import Form2Campaign from '../components/campaigns/form-2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },  
  {
    path : '/campaign-list',
    component : ListCampaign
  },
  {
    path : '/campaign-form',
    component : FormCampaign
  },
  {
    path : '/campaign-form-2',
    component : Form2Campaign
  }
]

const router = new VueRouter({
  routes
})

export default router
