import { Header } from './styledNavbar'
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <Header>
            <div className='container'>
                <div className='logo'>
                    <img src='../../../aapfolou.png' />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/home/:id">Home</Link>
                        </li>
                        <li>
                            <Link to="/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/configuracoes/:id">Configurações</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>

    );
}

export default Navbar;
