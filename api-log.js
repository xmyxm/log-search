const axios = require('axios');
const getTime = require('./util/getTime')
const printLog = require('./util/printLog')

const cookie = `s_u_745896=NLgW0WscrcDc/s3EiQuPaQ==; _lxsdk_cuid=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; _lxsdk=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; moa_deviceId=4AC4C0BCA7AD522D89965E6BEC6ADBA4; s_m_id_3299326472=AwMAAAA5AgAAAAIAAAE9AAAALORjPYkQn3rbZnHbyp93zHhS9JJK73QOyqhR5//65Pa5XDF4bpYla7L5jmqsAAAAI7rsDg9RhEnNt7suJKxhud+Sy/R3CRloGgOHQ10i8G9Uxj9m; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219a8ba7744226db-0acad55e52bc158-1d525631-1930176-19a8ba77443ef4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlhOGJhNzc0NDIyNmRiLTBhY2FkNTVlNTJiYzE1OC0xZDUyNTYzMS0xOTMwMTc2LTE5YThiYTc3NDQzZWY0In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%7D; com.sankuai.raptor.portal.static_strategy=; com.sankuai.raptor.web.static_strategy=; com.sankuai.raptor.application.static_strategy=EUmWor0TDj; ssoid=eAGFzj1KA0EUAGCmW8RCPMGUkmp29s2bN1buT2IIBJQUgt3uy0wW0bWQgLGwFhGUNIFUwdpCQcHGPgewsdQbaGennsALfHyRWHu8Opezy-_Xh0RHqJyOybhNyUNHAT1ZsB4UVRU418JSe9IQwAyza7EuIc0hV1me2rQwWhfkHJo2Zu0c0yJLQS4_b-ZPyYbQ_3r029ha6S7f797uk52v2fPLRTIV0Z6vBuwbfytkArFhZwMHW0JAoECOWHmsFIWhDfsyaO05RsO6haBdXLJjUhiTZrZJbKZCTkruHx22qVtjrzOpz1QHjvuD7XHaGx3gyW5vLla59s3puGyCb0YLMfv4C_0AOA9cnQ**eAEFwQcBADAIAzBLO1CYHE7xL2EJSUrvmRt0AUSh1VuXWfapQKUf0qyXM0pbL-UJBvoqmB9knRK6**o5rKQsSbCLWm1b9DiCo9NYXCpG_SFgvVKXhNeaDVRntsynhFdNH-mtkhfzUHbnOKpCdCmWlyzlzZPL7ET1KTyw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3NjU2NzgxMzg2NDc; yun_portal_ssoid=eAGFzj1KA0EUAGCmW8RCPMGUkmp29s2bN1buT2IIBJQUgt3uy0wW0bWQgLGwFhGUNIFUwdpCQcHGPgewsdQbaGennsALfHyRWHu8Opezy-_Xh0RHqJyOybhNyUNHAT1ZsB4UVRU418JSe9IQwAyza7EuIc0hV1me2rQwWhfkHJo2Zu0c0yJLQS4_b-ZPyYbQ_3r029ha6S7f797uk52v2fPLRTIV0Z6vBuwbfytkArFhZwMHW0JAoECOWHmsFIWhDfsyaO05RsO6haBdXLJjUhiTZrZJbKZCTkruHx22qVtjrzOpz1QHjvuD7XHaGx3gyW5vLla59s3puGyCb0YLMfv4C_0AOA9cnQ**eAEFwQcBADAIAzBLO1CYHE7xL2EJSUrvmRt0AUSh1VuXWfapQKUf0qyXM0pbL-UJBvoqmB9knRK6**o5rKQsSbCLWm1b9DiCo9NYXCpG_SFgvVKXhNeaDVRntsynhFdNH-mtkhfzUHbnOKpCdCmWlyzlzZPL7ET1KTyw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3NjU2NzgxMzg2NDc; WEBDFPID=1vyuw73uz8x55w95zx4v32u0w8y39376807zv32uwv797958y4817z9x-1765544639599-1729502902724CKYEAAC75613c134b6a252faa6802015be905511723; utm_source_rg=AM%2516.iAiA%25467; plus_token=T3NXGO4uXVse-AeolVNzqvMcSJOVOw3CaEfOW49ZzkqCzdkLOCu_NxexPFcxDS5OyAjN0xVsV4qItjGhsv8FiHqOGNmgpzz2P4TGyfWWmaGboX1Xxbq334TCF_rlTUCBX0fqrPzOa_OFGYrHKbALaex7fn7epB-GuifbX_5ixlPwwSjNNor5sp9nBNKIMg4pBcsyb8FRHstW141ioJpqcLyHwiAnDTizDZWw5eC1ttFlO40xiokl74qrVqDRogdufwEgd9EZrgJB; phmac=OjfxRcTvg3dyxpZJB3_QptZvDwyrhFmpK3l5WzEe37VjcycSRk2_d7i78cQcGYkyf-zgTa4rA7DJhGf1G2r61OPDXCZgRIhnC1_3JudB2-zV8SGC3OiVvlOq77IucUdZHZiQ9vOG7eTSo4VYacE-E9pFaw_S2a0c5NSIUNk6QF4PK7g4o1tbD70XBs4wW_MYpxFP4e5SuQro7ElIu20JBxISsntU7YHCg4dQ4XT2OkGZP_gr3_yUuK1f9zR-UnpbcUr5mWA9tNyreeVROmKiXmyVvTxQv5vFWxHRulBme42TO9GhGbt8M19OtIZWVHfgKawOT2JzoOE3YBke8-wC8g==; logan_session_token=wfwt3e4j5tgpdmkxahq6; _lxsdk_s=19b10c9ecb4-770-6ee-f8e%7C%7C57`
const usertextList = ['oPpUI0cyM4qdFL0Dfq6DpOjisqRI', 'cIoNa1p-MBoocBtEsOGgVUnIVuVh82q8CRDF5muI304', 'C1FffEyQ0QtplHFdUr49No6x0EleH0GVa5K_5WVVhBE']
const searchKeyWord = 'httpcode:403'
const startLong = new Date('2025-12-13 11:36:00').getTime()
const endLong = new Date('2025-12-13 11:36:00').getTime()

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
    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
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
