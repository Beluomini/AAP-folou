//ROUTES = SWITCH
import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Header/Navbar';

import Configuracoes from './components/pages/Configuracoes';
import Home from './components/pages/Home';
import Pedidos from './components/pages/Pedidos';
import Produtos from './components/pages/Produtos';
import PedidoCliente from './components/pages/PedidoCliente';


function App() {
  return (
    <Router>

      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedidos/:id" element={<PedidoCliente />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
