const API_URL = process.env.API_URL;

export function productsCall(){
    return fetch(API_URL + '/api/products', {
        method: 'GET'
    }).then(response => response.json());
}

export function customerCall(data){
    return fetch(API_URL + '/api/customer/find', {
        method: 'POST',
        body: data
    }).then(response => response.json());
}

export function orderCall(data){
    return fetch(API_URL + '/api/orders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}