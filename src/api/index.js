import fetch from './fetch'

export function fetchList (query) {
  return fetch({
    url: '/getList',
    method: 'get',
    params: query
  })
}

export function getTree () {
  return fetch({
    url: '/getTreeData',
    method: 'get'
  })
}
