import {
  IMGS
} from './mutation-types'
import {
  reqimgs,
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
}
