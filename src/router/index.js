import Vue from 'vue'
import VueRouter from 'vue-router'

import Shouye from '../pages/Shouye/Shouye.vue'
import FenLei from '../pages/FenLei/FenLei.vue'
import GouWuChe from '../pages/GouWuChe/GouWuChe.vue'
import ChongWu from '../pages/ChongWu/ChongWu.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/shouye',
      component:Shouye
    },
    {
      path:'/fenlei',
      component:FenLei
    },
    {
      path:'/gouwuche',
      component:GouWuChe
    },
    {
      path:'/chongwu',
      component:ChongWu
    },
    {
      path:'/',
      redirect:'/shouye'
    }
  ]
})
