import styles from './Navbar.module.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav class={styles.navbar}>
            <ul class={styles.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dados">Meus Dados</Link>
                </li>
                <li>
                    <Link to="/historico">Histórico</Link>
                </li>
                <li>
                    <Link to="/cupons">Cupons</Link>
                </li>
                <li>
                    <Link to="/endereco">Endereço</Link>
                </li>
                <li>
                    <Link to="/pagamentos">Pagamentos</Link>
                </li>
                <li>
                    <Link to="/configuracoes">Configurações</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;