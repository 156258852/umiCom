export interface IPollConfig {
  /**
   * 定时执行，重复执行，单位 ms
   */
  refreshInterval?: number;
  /**
   * 定时执行，执行一次，单位 ms
   */
  refreshTimeout?: number;
}

export type ServiceReturnPromise = (params?: any) => Promise<any>;
