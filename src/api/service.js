import request from '@/utils/request'

export function serviceList(query) {
  return request({
    url: '/service/service_list',
    method: 'get',
    params: query
  })
}

export function serviceDelete(query) {
  return request({
    url: '/service/service_delete',
    method: 'get',
    params: query
  })
}

export function serviceAddHttp(data) {
  return request({
    url: '/service/service_add',
    method: 'post',
    data
  })
}

export function serviceUpdateHttp(data) {
  return request({
    url: '/service/service_update',
    method: 'post',
    data
  })
}

export function serviceDetail(query) {
  return request({
    url: '/service/service_detail',
    method: 'get',
    params: query
  })
}
