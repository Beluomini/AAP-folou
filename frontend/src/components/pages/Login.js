import { PagLogin } from './styledLogin';

import React, { useState, useEffect } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

function Login() {

    const [login, setLogin] = useState([]);
    const [error, setError] = useState(' ');

    const navigate = useNavigate();

    function efetuaLogin(loginPetShop) {
        api
            .loginPetShop(loginPetShop)
            .then((res) => {
                console.log(res)
                if (res.statusCode == 201) {
                    alert(`Logado com sucesso!`);
                    navigate('/pedidos');
                }
                else {
                    setError('Email ou senha incorretos');
                }

            })
            .catch((err) => alert(`Erro: ${err.message} ${error}`));
    }

    function handleChange(e) {
        setLogin(login => ({ ...login, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        efetuaLogin(login);
    };

    return (
        <PagLogin>
            <h1>Faça Login em seu PetShop</h1>
            <form onSubmit={handleSubmit}>
                <div className='form_input'>
                    <Input text='Email ' type='text' name='email' placeholder='Email' handleOnChange={handleChange} />
                    <Input text='Senha ' type='text' name='password' placeholder='Senha' handleOnChange={handleChange} />
                    <SubmitButton text='Efetuar Login' />
                </div>
            </form>
        </PagLogin >
    )

}

export default Login;