import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Header/Navbar';

import Configuracoes from './components/pages/Configuracoes';
import Home from './components/pages/Home';
import Pedidos from './components/pages/Pedidos';
import Produtos from './components/pages/Produtos';
import PedidoCliente from './components/pages/PedidoCliente';
import EditProduct from './components/pages/EditProduct';
import Login from './components/pages/Login';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidos/:id" element={<PedidoCliente />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<EditProduct />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
