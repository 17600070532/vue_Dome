import Vue from 'vue'
import VueRouter from 'vue-router'

import Shouye from '../pages/Shouye/Shouye.vue'
import FenLei from '../pages/FenLei/FenLei.vue'
import GouWuChe from '../pages/GouWuChe/GouWuChe.vue'
import ChongWu from '../pages/ChongWu/ChongWu.vue'
import PinPai from '../pages/FenLei/Pinpai/Pinpai.vue'
import FenLeiList from '../pages/FenLei/Fenleilist/Fenleilist.vue'
import QuanBu from '../pages/QuanBu/QuanBu.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/shouye',
      component:Shouye
    },
    {
      path:'/fenlei',
      component:FenLei,
      children:[
        {
          path:'pinpai',
          component:PinPai
        },
        {
          path:'/fenlei/fenleilist',
          component:FenLeiList
        },
        {
          path:'',
          redirect:'fenleilist'
        }
      ]
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
      path:'/quanbu',
      component:QuanBu
    },
    {
      path:'/',
      redirect:'/shouye'
    }
  ]
})
