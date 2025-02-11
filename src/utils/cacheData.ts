const cacheMap = new Map<string, any>()

function getCache(key: string) {
  return cacheMap.get(key)
}

function setCache(key: string, value: any) {
  if (cacheMap.has(key)) return
  cacheMap.set(key, value)
}

function removeCache(key: string) {
  cacheMap.delete(key)
}

export { getCache, removeCache, setCache }
