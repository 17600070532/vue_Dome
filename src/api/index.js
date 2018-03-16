//与后台交互

import ajax from './ajax'

//获取地址信息(根据经纬度串)

export const  reqShouYe = () =>ajax('/shouye')
