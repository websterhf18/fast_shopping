export function productsCall(){
    return fetch('http://localhost:3000/api/products', {
        method: 'GET'
    }).then(response => response.json());
}

export function customerCall(data){
    return fetch('http://localhost:3000/api/customer/find', {
        method: 'POST',
        body: data
    }).then(response => response.json());
}

export function orderCall(data){
    return fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}