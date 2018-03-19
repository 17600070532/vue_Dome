//与后台交互

import ajax from './ajax'

//获取地址信息(根据经纬度串)

export const  reqimgs = () => ajax('/shouyeb')

//分类请求
export const reqfenlei = () => ajax('/fenleia')
//分类list
export const reqlist = () =>ajax('/list')
//品牌
export const reqbrand = () =>ajax('/brand')
//全部品牌
export  const reqsortBrand = ()=>ajax('/sortBrand')
