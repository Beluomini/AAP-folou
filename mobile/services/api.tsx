function loginClient(loginClient: any) {
  return fetch('http://192.168.0.136:3333/clients/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginClient),
  })
      .then((res) => res.json());
}

function getProducts() {
  return fetch('http://localhost:3333/products').then((res) => res.json());
}


export default {loginClient}