import type { NitroFetchRequest } from 'nitropack'
import type { FetchOptions, FetchResponse } from 'ofetch'
import type { UseFetchOptions } from 'nuxt/dist/app/composables/fetch'

const transFormResponse = ({ response }: any) => {
  // 处理后端携带了错误码响应的数据
  if (response._data && response._data.code) {
    return Promise.reject(response._data)
  }
  return (response._data = {
    ...response._data.data
  })
}

/**
 * $fetch简单请求场景
 * @param request
 * @param options
 * @return
 */
export const useClientFetch = (request: NitroFetchRequest, options?: FetchOptions<any>) => {
  // @ts-ignore
  return $fetch<FetchResponse<any>>(request, {
    onResponse: transFormResponse,
    ...options
  })
}

/**
 * 抽离useFetch通用配置
 * @param request
 * @param options
 * @return
 */
export const useRequest = (request: NitroFetchRequest, options?: UseFetchOptions<any>) => {
  return useFetch(request, {
    onResponse: transFormResponse,
    ...options
  })
}

/**
 * 封装get请求
 * @param request
 * @param options
 * @return
 */
useRequest.get = (request: NitroFetchRequest, options?: UseFetchOptions<any>) => {
  return useRequest(request, {
    method: 'get',
    ...options
  })
}

/**
 * 封装post请求
 * @param request
 * @param options
 * @return
 */
useRequest.post = (request: NitroFetchRequest, options?: UseFetchOptions<any>) => {
  return useRequest(request, {
    method: 'post',
    ...options
  })
}

/**
 * 封装put请求
 * @param request
 * @param options
 * @return
 */
useRequest.post = (request: NitroFetchRequest, options?: UseFetchOptions<any>) => {
  return useRequest(request, {
    method: 'put',
    ...options
  })
}

/**
 * 封装delete请求
 * @param request
 * @param options
 * @return
 */
useRequest.post = (request: NitroFetchRequest, options?: UseFetchOptions<any>) => {
  return useRequest(request, {
    method: 'delete',
    ...options
  })
}
