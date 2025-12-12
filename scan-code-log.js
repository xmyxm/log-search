const axios = require('axios');
const getTime = require('./util/getTime')
const printLog = require('./util/printLog')

const cookie = `s_u_745896=NLgW0WscrcDc/s3EiQuPaQ==; _lxsdk_cuid=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; _lxsdk=192ae67f9b6c8-0c0f15039c8dbc-19525637-1d73c0-192ae67f9b6c8; moa_deviceId=4AC4C0BCA7AD522D89965E6BEC6ADBA4; s_m_id_3299326472=AwMAAAA5AgAAAAIAAAE9AAAALORjPYkQn3rbZnHbyp93zHhS9JJK73QOyqhR5//65Pa5XDF4bpYla7L5jmqsAAAAI7rsDg9RhEnNt7suJKxhud+Sy/R3CRloGgOHQ10i8G9Uxj9m; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219a8ba7744226db-0acad55e52bc158-1d525631-1930176-19a8ba77443ef4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlhOGJhNzc0NDIyNmRiLTBhY2FkNTVlNTJiYzE1OC0xZDUyNTYzMS0xOTMwMTc2LTE5YThiYTc3NDQzZWY0In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%7D; com.sankuai.raptor.portal.static_strategy=; com.sankuai.raptor.web.static_strategy=; com.sankuai.raptor.application.static_strategy=EUmWor0TDj; ssoid=eAGFzj1KA0EUAGCmW8RCPMGUkmp29s2bN1buT2IIBJQUgt3uy0wW0bWQgLGwFhGUNIFUwdpCQcHGPgewsdQbaGennsALfHyRWHu8Opezy-_Xh0RHqJyOybhNyUNHAT1ZsB4UVRU418JSe9IQwAyza7EuIc0hV1me2rQwWhfkHJo2Zu0c0yJLQS4_b-ZPyYbQ_3r029ha6S7f797uk52v2fPLRTIV0Z6vBuwbfytkArFhZwMHW0JAoECOWHmsFIWhDfsyaO05RsO6haBdXLJjUhiTZrZJbKZCTkruHx22qVtjrzOpz1QHjvuD7XHaGx3gyW5vLla59s3puGyCb0YLMfv4C_0AOA9cnQ**eAEFwQcBADAIAzBLO1CYHE7xL2EJSUrvmRt0AUSh1VuXWfapQKUf0qyXM0pbL-UJBvoqmB9knRK6**o5rKQsSbCLWm1b9DiCo9NYXCpG_SFgvVKXhNeaDVRntsynhFdNH-mtkhfzUHbnOKpCdCmWlyzlzZPL7ET1KTyw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3NjU2NzgxMzg2NDc; yun_portal_ssoid=eAGFzj1KA0EUAGCmW8RCPMGUkmp29s2bN1buT2IIBJQUgt3uy0wW0bWQgLGwFhGUNIFUwdpCQcHGPgewsdQbaGennsALfHyRWHu8Opezy-_Xh0RHqJyOybhNyUNHAT1ZsB4UVRU418JSe9IQwAyza7EuIc0hV1me2rQwWhfkHJo2Zu0c0yJLQS4_b-ZPyYbQ_3r029ha6S7f797uk52v2fPLRTIV0Z6vBuwbfytkArFhZwMHW0JAoECOWHmsFIWhDfsyaO05RsO6haBdXLJjUhiTZrZJbKZCTkruHx22qVtjrzOpz1QHjvuD7XHaGx3gyW5vLla59s3puGyCb0YLMfv4C_0AOA9cnQ**eAEFwQcBADAIAzBLO1CYHE7xL2EJSUrvmRt0AUSh1VuXWfapQKUf0qyXM0pbL-UJBvoqmB9knRK6**o5rKQsSbCLWm1b9DiCo9NYXCpG_SFgvVKXhNeaDVRntsynhFdNH-mtkhfzUHbnOKpCdCmWlyzlzZPL7ET1KTyw**MjA2NTk3MixjaGVueHVhbmZlbmcs6ZmI5peL5bOwLGNoZW54dWFuZmVuZ0BtZWl0dWFuLmNvbSwxLDAzMDE4MTIyLDE3NjU2NzgxMzg2NDc; WEBDFPID=1vyuw73uz8x55w95zx4v32u0w8y39376807zv32uwv797958y4817z9x-1765544639599-1729502902724CKYEAAC75613c134b6a252faa6802015be905511723; utm_source_rg=AM%2516.iAiA%25467; logan_session_token=xn3o38ew3mo8narvm0yg; plus_token=3EK9aJOlU90DUZhyjVw7yksljRKXqx2VAk9CNeRo8XznW-igzvvHMHyKtMdhEPIgGQ5Sa-1jSRv9NSv7M2d107h4iWCX_otiIbUuc0ZkIqgD8nXZOy_8Y8I8GpBZg2vK9cyjBdfrromQIcSS6PcnA_cMO-ngAgj493Xjg6sPRW9TOBJnnk2hIXZnFcICA3BphpbhPG5iy8tB7khcCYYGPfA5_XlcYi2byBjEUTSPR3oeZv7_Qvha-isY4LR-rN7z0T1jUzIR4CLa; phmac=D7Dy9Qvc5XlKcomlxpP1hihDMMZ6dtY60b2e8DM6BTd31dyXO0pHo89ivpNf5Wx_J8oNDP8RQZMwQIEK11gGomlhmuhHq-Q0kt_WfoMOoWLwFFpxgdEwRYZwrkS9FcLLwbjrv7AlFSu0OK9weRAaF_SppcdAdXZe1g53PKFdZkB1-GvUVEwcHwmuxxtFQIMscC9Vl6QPn6_dcHvOpV3Jugcxaeu4YIDC4F_Eqclqot2R4cUcDsGDcbMR2lIArcnrbVazeSaoZk09rZV2DTRLuO8CUveI_rAFPB4xc_IWuIjullaPhPEbHm4KnPWB4TZJfecz1V4UwEVLspTfggDfHQ==; _lxsdk_s=19b104e998f-bf5-201-015%7C%7C46; _lxsdk_s=19b104e998f-bf5-201-015%7C%7C46`

const host = ['h', 't', 't', 'p', 's', ':', '/', '/', 'r', 'a', 'p', 't', 'o', 'r', '.', 'm', 'w', 's', '.', 's', 'a', 'n', 'k', 'u', 'a', 'i', '.', 'c', 'o', 'm'].join('')

const reportId = 829;

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
    'referer': `${host}/front-end-report/periodic-report/report-detail/829`,
    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
};


async function fetchLogDetail(reportId = 829, date, isRetry = 0) {
    const url = `${host}/api/prism/report/data?reportId=${reportId}&start=${date}%2000:00:00&end=${date}%2023:59:59`
    try {
        const response = await axios.get(url, { headers: customHeaders });
        if (response.data?.data?.metricsTableVoList) {
            const { metricsTableVoList } = response.data.data
            const metricsNameList = ['tp90', 'tp50']
            const result = {
                tp90: {
                    totalData: 0,
                    data1: 0,
                    data2: 0,
                    data3: 0
                },
                tp50: {
                    totalData: 0,
                    data1: 0,
                    data2: 0,
                    data3: 0
                }
            }
            metricsTableVoList.forEach((item, index) => {
                if (index < 2) {
                    const [totalData, data1, data2, data3] = item.metricsValues
                    result[metricsNameList[index]].totalData = parseFloat((totalData[0].value / 1000).toFixed(3))
                    result[metricsNameList[index]].data1 = parseFloat((data1[0].value / 1000).toFixed(3))
                    result[metricsNameList[index]].data2 = parseFloat((data2[0].value / 1000).toFixed(3))
                    result[metricsNameList[index]].data3 = parseFloat((data3[0].value / 1000).toFixed(3))
                }
            })
            printLog.info(`${getTime()}: ${isRetry ? `重试第 ${isRetry + 1} 次` : ''}查询 ${reportId} 详情成功`)
            return result
        } else if (isRetry < 3) {
            // 重试
            return await fetchLogDetail(reportId, date, isRetry += 1)
        } else {
            printLog.error(`${getTime()}: 重试查询 ${isRetry + 1} 次 ${reportId} 详情时仍然失败, 状态码：${response.data.code}, 失败原因：${response.data.message}`)
        }
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error.message);
    }
}

function getDateList() {
    // 获取当前日期
    const today = new Date();
    const currentYear = today.getFullYear();

    // 设置起始日期为今年10月1日（月份从0开始，9月是8）
    const startDate = new Date(currentYear, 11, 1); // 9月1日

    const dateList = [];
    // 循环打印从9月1日到今天的日期
    for (let date = new Date(startDate); date <= today; date.setDate(date.getDate() + 1)) {
        // 格式化日期为YYYY-MM-DD格式
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        dateList.push(formattedDate);
    }
    return dateList;
}

Promise.all(    
    getDateList().map(date => fetchLogDetail(reportId, date).then(results => {
        return {
            date,
            result: JSON.stringify(results)
        }
    }))
).then(results => {    
    console.log(results.sort((a, b) => a.date.localeCompare(b.date)));
})
