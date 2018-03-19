import {
  IMGS,
  FENLEI,
  LIST,
  PINPAI,
  QUANBU
} from './mutation-types'
import {
  reqimgs,
  reqfenlei,
  reqlist,
  reqbrand,
  reqsortBrand
} from '../api/index'
export default {
  async shouye({commit},callback){
    const result = await reqimgs()

    if(result.code===0){
      const data = result.data

      commit(IMGS,{data})
      callback&&callback()
    }
  },
  //left分类
  async fenlei({commit}){
    const result = await reqfenlei()
    if(result.code ===0){
      const data1 = result.data1
      commit(FENLEI,{data1})
    }
  },
  //right分类1
  async list({commit},callback){
    const result = await reqlist()
    if(result.code===0){
      const list1 = result.list
      commit(LIST,{list1})
      callback&&callback()
    }
  },
  async brand({commit},callback){
    const result = await reqbrand()
    if(result.code===0){
      const pinpai = result.brand
      commit(PINPAI,{pinpai})
    }
  },
  async quanbua({commit},callback){
    const result = await reqsortBrand()
    if(result.code===0){
      const quanbu = result.sortBrand
      commit(QUANBU,{quanbu})
      callback&&callback()
    }
  }
}
