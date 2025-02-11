import { PaginationInfo, ServiceReturnPromise, PaginationFormater } from './types';
declare type PaginationParams = {
    data: any;
    updater: ServiceReturnPromise;
    paginationFormater: PaginationFormater | undefined;
};
/**
 * 获取分页信息
 * @param param
 */
export declare function getPagination({ data, updater, paginationFormater }: PaginationParams): PaginationInfo;
export {};
