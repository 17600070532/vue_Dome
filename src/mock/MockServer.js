//使用Mockjs提供mock接口

import Mock from 'mockjs'
import data from './homepage.json'

Mock.mock('/shouyeb',{code:0,data:data})
