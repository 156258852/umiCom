/**
 * 获取分页信息
 * @param param
 */
export function getPagination(_a) {
    var _b, _c, _d, _e, _f;
    var _g = _a.data, data = _g === void 0 ? {} : _g, updater = _a.updater, paginationFormater = _a.paginationFormater;
    if (paginationFormater && typeof paginationFormater === 'function') {
        return paginationFormater({ data: data, updater: updater });
    }
    return {
        total: ((_b = data.PageInfo) === null || _b === void 0 ? void 0 : _b.TotalCount) || ((_c = data.PageInfo) === null || _c === void 0 ? void 0 : _c.Total) || data.TotalCount || data.Total || 0,
        current: ((_d = data.PageInfo) === null || _d === void 0 ? void 0 : _d.PageNumber) || ((_e = data.PageInfo) === null || _e === void 0 ? void 0 : _e.CurrentPage) || data.PageNumber || data.CurrentPage || 0,
        pageSize: ((_f = data.PageInfo) === null || _f === void 0 ? void 0 : _f.PageSize) || data.PageSize || 10,
        // PageSize如果有变化 应该使用变化后的值
        onChange: function (page) {
            updater({ CurrentPage: page, PageSize: this.pageSize });
        },
        onPageSizeChange: function (size) {
            updater({ PageSize: size, CurrentPage: 1 });
        },
    };
}
