export const BASE_URL = 'https://swapi.dev/api/';

export const apiCall = ({ url }) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}