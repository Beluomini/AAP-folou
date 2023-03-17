import { useNavigate, useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";


function Home() {
    const [petshop, setPetShop] = useState({})

    const [user, setUser] = useState()

    const navigate = useNavigate();

    const petshopid = localStorage.getItem('petshopid') //como string
    const petshopidFormat = petshopid ? JSON.parse(petshopid) : undefined //como objeto

    const handleSubmit = () => {
        navigate(`/configuracoes`);
    }

    useEffect(() => { //verifica se o usuário está logado
        const userFromStorage = localStorage.getItem('petshopid')
        const userFromStorageFormat = userFromStorage ? JSON.parse(userFromStorage) : undefined
        if (!userFromStorage) {
            navigate(`/`);
        }
        if (userFromStorageFormat) {
            setUser(userFromStorageFormat)
        }
    }, []);

    useEffect(() => {
        api.getPetShopById(petshopidFormat).then(res => setPetShop(res))
    }, [petshopidFormat])

    return (
        <ContainerPage>
            <h1>Dados Meu PetShop</h1>
            <PagHome>
                <div className='minhaloja'>
                    <img src='../../../aapfolou4.png' />
                    <h1>{petshop.name} </h1>
                    <h2>Email: {petshop.email}</h2>
                    <h2>CNPJ: {petshop.cnpj}</h2>
                    <h2>Contato: {petshop.contact}</h2>
                    <h2>CEP: {petshop.cep}</h2>
                    <h2>Endereço: {petshop.address}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <SubmitButton text='Ver Minha Loja' name="add" />
                </form>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;