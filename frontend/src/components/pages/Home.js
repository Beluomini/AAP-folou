import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";
import Configuracoes from './Configuracoes';

function Home() {
    const [petshop, setPetShop] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        api.getPetShop().then((resposta) => setPetShop(resposta))
    }, []);

    const handleSubmit = () => {
        navigate(`/configuracoes`);
    }

    return (
        <ContainerPage>
            <h1>Dados Meu PetShop</h1>
            <PagHome>
                <div className='minhaloja'>
                    <h1>{petshop?.map((petshop) => (petshop.name))}</h1>
                    <h2>Email: {petshop?.map((petshop) => (petshop.email))}</h2>
                    <h2>CNPJ: {petshop?.map((petshop) => (petshop.cnpj))}</h2>
                    <h2>Contato: {petshop?.map((petshop) => (petshop.contact))}</h2>
                    <h2>CEP: {petshop?.map((petshop) => (petshop.cep))}</h2>
                    <h2>Endereço: {petshop?.map((petshop) => (petshop.address))}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <SubmitButton text='Ver Minha Loja' name="add" />
                </form>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;