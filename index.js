const axios = require('axios');
const getTime = require('./util/getTime')
const printLog = require('./util/printLog')

const cookie = `moa_deviceId=4AC4C0BCA7AD522D89965E6BEC6ADBA4; s_u_745896=NLgW0WscrcDc/s3EiQuPaQ==; u=1791190; ssoid=eAGFjztLQzEYQAmKlA4inRzv4NB2kNwkX27i5O1twdEXCC6S5H5xENqhgksR6-YDBMVBJ5WCYEEROug_UNFBEHfBR_duThbE2f1wOCdDRjq768HL08PBPWMZSTULFeiJgIHkUhpqhJSCU2qtoMU0tanwwiJi6ZvkCgto5xxWsSHiRCS0lMRRXAbGykprCRVZqiQyLpdiEfTe9l4fWZ6wf8Wq3zOZnXp_bh_esemd207vgm2SYnZoZjappZjLfbTOu9enn1vtr5Nm97LVvWqODgYbN0eF_C-8TzJ_XcdknIIF7jyE_YvIRB60NsY50BwV14YvhRHTQDnjPBRwRsbW0Da4CMHpyDsfGeGlUF5p5ShKS5VPI78YIEjGmbY2LSqBobRKCaMBuTBgNMImGV7G1dg5rNfnaytY3SYD9XrtBwuGeHI**eAENycEBwCAIA8CVQGuAcUIx-4_Q3vdiz31Q6GOrhlz7bUutzBBINWfyL-CUhcuvoFTaqD2aH0GrEiU**K8aHFGHLF5-oe6Zc62wyB5A89V2mZirpGc61vyGYUhYVii4cFTSl6eulCXtAJaSTnKsM0jB4yv12nqEAXYV0Fw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3Mzc2MjM3NzQ5MzI; yun_portal_ssoid=eAGFjztLQzEYQAmKlA4inRzv4NB2kNwkX27i5O1twdEXCC6S5H5xENqhgksR6-YDBMVBJ5WCYEEROug_UNFBEHfBR_duThbE2f1wOCdDRjq768HL08PBPWMZSTULFeiJgIHkUhpqhJSCU2qtoMU0tanwwiJi6ZvkCgto5xxWsSHiRCS0lMRRXAbGykprCRVZqiQyLpdiEfTe9l4fWZ6wf8Wq3zOZnXp_bh_esemd207vgm2SYnZoZjappZjLfbTOu9enn1vtr5Nm97LVvWqODgYbN0eF_C-8TzJ_XcdknIIF7jyE_YvIRB60NsY50BwV14YvhRHTQDnjPBRwRsbW0Da4CMHpyDsfGeGlUF5p5ShKS5VPI78YIEjGmbY2LSqBobRKCaMBuTBgNMImGV7G1dg5rNfnaytY3SYD9XrtBwuGeHI**eAENycEBwCAIA8CVQGuAcUIx-4_Q3vdiz31Q6GOrhlz7bUutzBBINWfyL-CUhcuvoFTaqD2aH0GrEiU**K8aHFGHLF5-oe6Zc62wyB5A89V2mZirpGc61vyGYUhYVii4cFTSl6eulCXtAJaSTnKsM0jB4yv12nqEAXYV0Fw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3Mzc2MjM3NzQ5MzI; com.sankuai.raptor.portal.static_strategy=; com.sankuai.raptor.portal.static_random=; com.sankuai.raptor.web.static_strategy=; com.sankuai.raptor.web.static_random=; com.sankuai.raptor.application.static_strategy=; com.sankuai.raptor.application.static_random=; _lxsdk_cuid=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; _lxsdk=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; WEBDFPID=1vyuw73uz8x55w95zx4v32u0w8y39376807zv32uwv797958y4817z9x-1737527019745-1729502902724CKYEAAC75613c134b6a252faa6802015be905511723; logan_session_token=bxgrtxmn2nggh9xw4whj; s_m_id_3299326472=AwMAAAA5AgAAAAIAAAE9AAAALMxSO1G0rLZpX8W5KiAbFm/jz/9sRidsJgDQiosRHZJANoF0WwES/GtfPREQAAAAI/4wjH6TWSOnIJPUL08MYWxEIg/w9yMw4pqXjK9nBjS2wGQE; _lxsdk_s=194877013fd-160-14-303%7C%7C488`
const usertextList = ['BV0cf9JO3mlaulCwwzbPlnY4QxGE46d1y1LJMfYqYoQ', '1077493563', 'oGT4ctxCfgXeT2HKKcsGTlGiyD8A', 'oZP24uLgmOd75_U9aNu5aFk9z6lg']
const searchKeyWord = 'httpcode:403'
const startLong = new Date('2025-01-21 13:22:00').getTime()
const endLong = new Date('2025-01-21 13:22:00').getTime()

let offset = 0;
const limit = 100;
const maxRequestCount = 3
const host = ['h', 't', 't', 'p', 's', ':', '/', '/', 'r', 'a', 'p', 't', 'o', 'r', '.', 'm', 'w', 's', '.', 's', 'a', 'n', 'k', 'u', 'a', 'i', '.', 'c', 'o', 'm'].join('')

Promise.resolve().then(() => {
    fetchListWithLimit(searchKeyWord, limit, offset, startLong, endLong, maxRequestCount).then((idList) => {
        fetchDetailWithLimit(idList, maxRequestCount).then(detailList => {
            printLog.info(`${getTime()}: 查询完所有日志详情 ================>`)
            let searchCount = 0;
            let filterCount = 0;
            detailList.forEach((item, index) => {
                if (item) {
                    searchCount += 1
                    if (item.filterData) {
                        filterCount += 1
                        printLog.info(`${index} =====> ${JSON.stringify(item.filterData)}`)
                    }
                }
            })
            const time = `${getTime(startLong)} : 共查询出：`
            printLog.info(`${time}${idList.length} 条数据记录`)
            printLog.info(`${time}${searchCount} 条数据明细`)
            printLog.warn(`${time}${filterCount} 条匹配数据`)
        })
    })
})

// 自定义请求头
const customHeaders = {
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'cookie': cookie,
    'm-appkey': 'fe_cat-fe-static',
    'm-traceid': '-2545012941276848673',
    'pragma': 'no-cache',
    'pragma-env': 'rc',
    'priority': 'u=1, i',
    'referer': `${host}/mp/error/detail?type=datetimerange&start=20241116103200&end=20241116110200&projectId=2621&webVersion=all&metric=TP90&speedPoint=11,16,18,25&singleSpeedPoint=16&isPerfInMp=false&perfBundleId=3763&errorListCurrentPage=1&shortId=RaE0KWOY7f&errorDetailCurrentPageSize=50&errorName=httpcode%3A403&errorDetailCurrentPage=1`,
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest, XMLHttpRequest',
};

async function fetchLogList(searchKeyWord, limit, offset, startLong, endLong, searchLogIdList = []) {
    const currentPageIndex = offset / limit + 1
    const errorCategory = encodeURIComponent(searchKeyWord)
    const queryParam = encodeURIComponent(`{"SEC_CATEGORY":["${searchKeyWord}"]}`)
    const baseParam = 'projectId=2621&webVersion=all&pageId=-1&metric=TP90&speedPoint=11&speedPoint=16&speedPoint=18&speedPoint=25&statusCodeId=-1&connectTypeId=-1&mpVerId=-1&mpLibVerId=-1&isPerfInMp=false&perfBundleId=3763'
    const url = `${host}/cat/fe/mplog/detailTable?${baseParam}&errorCategory=${errorCategory}&pageSize=${limit}&sortField=DATE&sortOrder=DESC&limit=${limit}&offset=${offset}&unionId=&pvId=&queryParam=${queryParam}&timeSize=MINUTE&startLong=${startLong}&endLong=${endLong}`
    const searchTimetext = `${getTime(startLong)} - ${getTime(endLong)}`

    try {
        let isContinue = false
        let hasRequestSUS = false, hasData = false
        const response = await axios.get(url, { headers: customHeaders });
        if (response.data && response.data.code === 10000) {
            hasRequestSUS = true
            const { result } = response.data
            if (result.table && result.table.rows) {
                hasData = true
                result.table.rows.forEach(({ id, main }) => {
                    if (id) {
                        searchLogIdList.push({ id, time: main })
                    }
                })
            }
            if (offset === 0) {
                printLog.info(`${searchTimetext}: 当前查询条件总共有：${result.total}条数据`)
            }
            if (result.table.rows.length === limit) {
                isContinue = true
            }
        }
        const message = `${searchTimetext}: 发送第${currentPageIndex}页查询请求响应${hasRequestSUS ? '成功' : '失败'}, ${hasRequestSUS ? hasData ? `查询到${response.data.result.table.rows.length}条数据` : '但是没有数据' : ''}`
        if (hasRequestSUS) {
            printLog.info(message)
        } else {
            printLog.error(`${searchTimetext}: ${message}, 状态码：${response.data.code}, 失败原因：${response.data.message}`)
        }

        if (isContinue) {
            await fetchLogList(searchKeyWord, limit, offset += limit, startLong, endLong, searchLogIdList)
        }

        return searchLogIdList
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error.message);
    }
}

async function fetchLogDetail(logId, date, isRetry = 0) {
    const url = `${host}/cat/fe/mplog/singleContent?logId=${logId}&date=${date}`
    try {
        const response = await axios.get(url, { headers: customHeaders });
        if (response.data && response.data.code === 10000) {
            const { result: { otherInfo: { customInfo, other: { eventTs } }, pageUrl, stackInfo } } = response.data
            const result = { data: null, filterData: null }
            if (usertextList.find(key => stackInfo.indexOf(key) > -1)) {
                const versionInfo = JSON.parse(customInfo)
                const contentJson = JSON.parse(stackInfo)
                result.filterData = Object.assign({
                    pageUrl,
                    time: getTime(eventTs),
                    contentJson
                }, versionInfo)
            }
            printLog.info(`${getTime()}: ${isRetry ? `重试第 ${isRetry + 1} 次` : ''}查询 ${logId} 详情成功`)
            result.data = response.data
            return result
        } else if (isRetry < 3) {
            // 重试
            return await fetchLogDetail(logId, date, isRetry += 1)
        } else {
            printLog.error(`${getTime()}: 重试查询 ${isRetry + 1} 次 ${logId} 详情时仍然失败, 状态码：${response.data.code}, 失败原因：${response.data.message}`)
        }
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error.message);
    }
}

async function fetchListWithLimit(searchKeyWord, limit, offset, startLong, endLong, maxRequestCount) {
    const intervals = [];
    const intervalInSeconds = 60
    let current = startLong;

    while (current <= endLong) {
        const next = current + intervalInSeconds * 1000
        intervals.push({ start: current, end: current });
        current = next;
    }

    const executing = [];

    for (const { start, end } of intervals) {

        const promise = fetchLogList(searchKeyWord, limit, offset, start, end)

        executing.push(promise);

        if (executing.length > maxRequestCount) {
            await Promise.race(executing);
        }
    }

    return Promise.all(executing).then((List) => {
        return [].concat.apply([], List)
    });
}

async function fetchDetailWithLimit(idList, maxRequestCount) {
    const executing = [];

    for (const { id, time } of idList) {

        const promise = fetchLogDetail(id, new Date(time).getTime())

        executing.push(promise);

        if (executing.length > maxRequestCount) {
            await Promise.race(executing);
        }
    }

    return Promise.all(executing);
}
