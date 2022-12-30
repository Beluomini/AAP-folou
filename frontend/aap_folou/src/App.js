//ROUTES = SWITCH
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dados from './components/pages/Dados';
import Historico from './components/pages/Historico';
import Cupons from './components/pages/Cupons';
import Endereco from './components/pages/Endereco';
import Pagamentos from './components/pages/Pagamentos';
import Configuracoes from './components/pages/Configuracoes';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dados">Meus Dados</Link>
        <Link to="/historico">Histórico</Link>
        <Link to="/cupons">Cupons</Link>
        <Link to="/endereco">Endereço</Link>
        <Link to="/pagamentos">Pagamentos</Link>
        <Link to="/configuracoes">Configurações</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/cupons" element={<Cupons />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/pagamentos" element={<Pagamentos />} />

      </Routes>


    </Router>
  );
}

export default App;
