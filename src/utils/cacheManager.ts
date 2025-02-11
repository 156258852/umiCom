class CacheManager {
  private cacheMap: Map<string, any>

  constructor() {
    this.cacheMap = new Map()
  }

  getCache(key: string): any | undefined {
    return this.cacheMap.get(key)
  }

  setCache(key: string, value: any): void {
    this.cacheMap.set(key, value)
  }

  removeCache(key: string): void {
    this.cacheMap.delete(key)
  }
}

// 创建一个单例实例
const cacheManager = new CacheManager()

export default cacheManager
