const ip = '192.168.15.122';

//produtos
function getProducts() {
    return fetch("http:/" + ip + ":3333/products").then((res) => res.json());
}

function getProductById(id) {
    return fetch(`http://` + ip + `:3333/products/${id}`).then((res) => res.json());
}

function getPetShopById(id) {
    return fetch(`http://` + ip + `:3333/pet-shops/${id}`).then((res) => res.json());
}

function getPurchaseById(id) {
    return fetch(`http://` + ip + `:3333/purchases/${id}`).then((res) => res.json());
}

function getPurchaseByOrder(idOrder) {
    return fetch(`http://` + ip + `:3333/purchases/order/${idOrder}`).then((res) => res.json());
}

function getOrderById(id) {
    return fetch(`http://` + ip + `:3333/orders/${id}`).then((res) => res.json());
}

function getOrdersByClient(idClient) {
    return fetch(`http://` + ip + `:3333/orders/client/${idClient}`).then((res) => res.json());
}

function createPurchase(newPurchase) {
    return fetch('http://' + ip + ':3333/purchases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPurchase),
    })
        .then((res) => res.json())
}

function createOrder(newOrders) {
    return fetch('http://' + ip + ':3333/orders', {
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

function loginClient(loginClient) {
    return fetch('http://' + ip + ':3333/clients/login', {
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
    getProducts, getProductById, getPurchaseById, createPurchase, removeOrders,
    editOrders, getPetShopById, loginClient, getClientesById, createOrder,
    getPurchaseByOrder, getOrderById, getOrdersByClient
};