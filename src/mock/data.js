import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@cname',
    auditor: '@cname',
    title: '@ctitle(10, 20)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }))
}

export default {
  getList: config => {
    const {page = 1, size = 10, sort} = param2Obj(config.url)
    let mockList = List

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < size * page && index >= size * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getTreeData: () => {
    let treeData = []
    for (let i = 0; i < 10; i++) {
      treeData.push(Mock.mock({
        id: /\d{1,2}/,
        name: '@ctitle(1, 10)',
        'children|1-5': [{
          id: /\d{1,2}/,
          name: '@ctitle(1, 10)'
        }]
      }))
    }
    return treeData
  }
}
