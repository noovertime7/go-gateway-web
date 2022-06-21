import request from '@/utils/request'

export function serviceList(query) {
  return request({
    url: '/service/service_list',
    method: 'post',
    params: query
  })
}
