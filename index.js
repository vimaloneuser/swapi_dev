import { apiCall, BASE_URL } from "./apis"

const root = async () => {
    let response = await apiCall({ url: `${BASE_URL}` });
    let final = {
        type: []
    }
    for (var i in response) {
        final.type.push(i);
    }
    return final;
}

const topicListing = async ({ topic, page = 1, id }) => {
    let response = await apiCall({ url: `${BASE_URL}${topic}/${id ? id + "/" : ""}/?page=${page}` });

    let results = {};
    response.results.map(item => {
        var tempObj = {}
        for (var key in item) {
            if (Array.isArray(item[key])) {
                var arr = []
                item[key].map(itm => {
                    arr.push(Number(String(itm).split("/")[(String(itm).split("/")).length - 2]));
                })
                tempObj[key] = arr;
            }
            results = {
                ...item,
                ...tempObj
            }
        }
    })

    let final = {
        ...response,
        currentPage: response?.next ? Number(String(response.next).charAt(String(response.next).length - 1)) - 1 : response?.previous ? Number(String(response.previous).charAt(String(response.previous).length - 1)) + 1 : 1,
        next: response?.next ? true : false,
        previous: response?.previous ? true : false,
        results
    }
    return final;
}

const topicDeatail = async ({ topic, id }) => {
    let response = await apiCall({ url: `${BASE_URL}${topic}/${id ? id + "/" : ""}` });
    let tempObj = {}
    for (var key in response) {
        if (Array.isArray(response[key])) {
            let arr = []
            response[key].map(itm => {
                arr.push(Number(String(itm).split("/")[(String(itm).split("/")).length - 2]));
            })
            tempObj[key] = arr;
        }
    }

    let final = {
        ...response,
        ...tempObj
    }
    return final;
}

export default { root, topicListing, topicDeatail }