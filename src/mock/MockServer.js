//使用Mockjs提供mock接口

import Mock from 'mockjs'
import data from './homepage.json'
import data1 from './categorys.json'
import cateList from './cateList.json'
import dogBeauty from './dogBeauty.json'
import dogClear from './dogClear.json'
import dogClose from './dogClose.json'
import dogDrag from './dogDrag.json'
import dogHealth from './dogHealth.json'
import dogLife from './dogLife.json'
import dogMedical from './dogMedical.json'
import dogNest from './dogNest.json'
import dogSnacks from './dogSnacks.json'
import dogSurround from './dogSurround.json'
import dogToy from './dogToy.json'
import mainFood from './mainFood.json'
import brand from './brand.json'
import sortBrand from './sortBrand.json'



Mock.mock('/shouyeb',{code:0,data:data})
Mock.mock('/fenleia',{code:0,data1:data1})
Mock.mock('/list',{code:0,list:[cateList,dogBeauty,dogClear,dogClose,dogDrag,dogHealth,
dogLife,dogMedical,dogNest,dogSnacks,dogSurround,dogToy,mainFood
]})
Mock.mock('/brand',{code:0,brand:brand})
Mock.mock('/sortBrand',{code:0,sortBrand:sortBrand})
