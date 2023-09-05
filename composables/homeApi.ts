export const getProjectList = async (params: any) => {
  return await useClientFetch('/api/project/find', { ...params })
}

export const getBlogData = async (params: any) => {
  return await useClientFetch('/api/blog/list', { ...params })
}
