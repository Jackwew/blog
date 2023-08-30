export const getProjectList = async (params: any) => {
  return await useClientFetch('/api/project/find', { ...params })
}
