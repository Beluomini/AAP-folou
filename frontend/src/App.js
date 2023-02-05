import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Navbar from './components/Header/Navbar';

import Configuracoes from './components/pages/Configuracoes';
import Home from './components/pages/Home';
import Pedidos from './components/pages/Pedidos';
import Produtos from './components/pages/Produtos';
import PedidoCliente from './components/pages/PedidoCliente';
import EditProduct from './components/pages/EditProduct';
import Login from './components/pages/Login';

import api from './services/api';

function App() {

  const [petshop, setPetShop] = useState([])

  useEffect(() => {
    api.getPetShop().then((resposta) => setPetShop(resposta))
    console.log(petshop)
  }, []);

  return (
    <Router>

      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Login petshops={petshop?.map((res) => (res))} />} />
          <Route path="/home/:id" element={<Home id={petshop?.map((res) => (res._id))} />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedidos/:id" element={<PedidoCliente />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<EditProduct />} />
          <Route path="/configuracoes/:id" element={<Configuracoes id={petshop._id} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
