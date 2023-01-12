function getProducts() {
    return fetch("http://localhost:3333/products").then((r) => r.json());
}



export default { getProducts };