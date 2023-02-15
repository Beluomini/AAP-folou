import { PagLogin } from './styledLogin';

import React, { useState, useEffect } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

function Login() {
    const [petshop, setPetShop] = useState([]);

    const navigate = useNavigate();

    function efetuaLogin(loginPetShop) {
        api
            .loginPetShop(loginPetShop)
            .then((res) => {
                if (res.$isNew == false) {
                    alert(`Logado com sucesso!`);
                    localStorage.setItem('petshopid', JSON.stringify(res._doc._id))
                    localStorage.setItem('petshopdados', JSON.stringify(res._doc))
                    navigate(`/home`);
                }
                else {
                    alert(`Erro: ${res.message}`);
                }
            })
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    function handleChange(e) {
        setPetShop(login => ({ ...login, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        efetuaLogin(petshop);
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