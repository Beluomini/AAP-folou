//ROUTES = SWITCH
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Dados from './components/pages/Dados';
import Historico from './components/pages/Historico';
import Cupons from './components/pages/Cupons';
import Endereco from './components/pages/Endereco';
import Pagamentos from './components/pages/Pagamentos';
import Configuracoes from './components/pages/Configuracoes';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className='barranav'>
        <Navbar />
      </div>

      <div className='conteudo'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/cupons" element={<Cupons />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
