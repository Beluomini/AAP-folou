import { Header } from './styledNavbar'
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {

    const logout = () => {
        localStorage.clear();
        alert('Logout efetuado com sucesso!');
        alert('Você será redirecionado para a página de login!');
    }
    return (
        <Header>
            <div className='container'>
                <div className='logo'>
                    <img src='../../../aapfolou.png' />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/configuracoes">Configurações</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={logout}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>

    );
}

export default Navbar;
