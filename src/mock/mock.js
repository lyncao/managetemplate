import Mock from 'mockjs'
import DataApi from './data'

Mock.mock(/\/getList/, 'get', DataApi.getList)
Mock.mock(/\/getTreeData/, 'get', DataApi.getTreeData)
export default Mock
