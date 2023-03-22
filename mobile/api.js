//produtos
function getProducts() {
    return fetch("http://192.168.0.136:3333/products").then((res) => res.json());
}

function getOrdersById(id) {
    return fetch(`http://localhost:3333/orders/${id}`).then((res) => res.json());
}

function createOrders(newOrders) {
    return fetch('http://localhost:3333/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrders),
    })
        .then((res) => res.json())
}

function removeOrders(id) {
    return fetch(`http://localhost:3333/orders/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
}

function editOrders(orders, id) {
    return fetch(`http://localhost:3333/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orders)
    })
        .then((res) => res.json())
}

function getPetShopById(id) {
    return fetch(`http://localhost:3333/pet-shops/${id}`).then((res) => res.json());
}

function loginClient(loginClient) {
    return fetch('http://192.168.0.136:3333/clients/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginClient),
    })
        .then((res) => res.json());
}

function getClientesById(id) {
    return fetch(`http://localhost:3333/clients/${id}`).then((res) => res.json());
}


export default {
    getProducts, getOrdersById, createOrders, removeOrders, 
    editOrders, getPetShopById, loginClient, getClientesById
};