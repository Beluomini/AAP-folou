import { PagRegistrar } from './styledRegistrar';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

function Registrar() {
    const [petshop, setPetShop] = useState({});

    const navigate = useNavigate();

    function efetuaRegistro(registroPetShop) {
        api
            .registerPetShop(registroPetShop)
            .then((res) => {
                console.log(res)
                if (res.message) {
                    alert(`Erro: ${res.message}`);
                }
                else {
                    console.log(res)
                    alert(`Registro efetuado com sucesso!`);
                    localStorage.setItem('petshopid', JSON.stringify(res._id))
                    localStorage.setItem('petshopdados', JSON.stringify(res))
                    navigate(`/login`);
                }
            })
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    function handleChange(e) {
        setPetShop(registro => ({ ...registro, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        efetuaRegistro(petshop);
    };

    return (
        <PagRegistrar>
            <h1>Bem Vindo Ao AAP FOLOU</h1>
            <form onSubmit={handleSubmit}>
                <div className='logo'>
                    <img src='../../../aapfolou6.png' />
                </div>
                <h2>Faça o Registro do seu PetShop</h2>
                <div className='form_input'>
                    <Input text='Nome do Proprietário ' type='text' name='name' placeholder='Nome' handleOnChange={handleChange} />
                    <Input text='Email ' type='text' name='email' placeholder='Email' handleOnChange={handleChange} />
                    <Input text='Senha ' type='password' name='password' placeholder='Senha' handleOnChange={handleChange} />
                    <Input text='CNPJ ' type='text' name='cnpj' placeholder='CNPJ' handleOnChange={handleChange} />
                    <Input text='Contato ' type='text' name='contact' placeholder='Contato' handleOnChange={handleChange} />
                    <Input text='CEP ' type='text' name='cep' placeholder='CEP' handleOnChange={handleChange} />
                    <Input text='Endereço ' type='text' name='address' placeholder='Endereço' handleOnChange={handleChange} />
                    <div></div>
                    <SubmitButton className='btn' text='Efetuar Registro' />
                </div>
            </form>
            <div className='link'>
                <Link to="/">Já é Registrado? Clique aqui!</Link>
            </div>
        </PagRegistrar >
    )

}

export default Registrar;