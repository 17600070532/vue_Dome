import {
  IMGS,
  FENLEI,
  LIST,
  PINPAI,
  QUANBU
} from './mutation-types'

export default {
  [IMGS](state,{data}){
      state.data = data
  },
  [FENLEI](state,{data1}){
    state.data1 = data1
  },
  [LIST](state,{list1}){
    state.list = list1
  },
  [PINPAI](state,{pinpai}){
    state.pinpai = pinpai
  },
  [QUANBU](state,{quanbu}){
    state.quanbu = quanbu
  }
}
