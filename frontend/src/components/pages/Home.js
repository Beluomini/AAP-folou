import { useNavigate, useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function Home() {

    const { id } = useParams();
    const [petshop, setPetShop] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        api.getPetShop().then((resposta) => setPetShop(resposta))
    }, []);

    const view = (e) => {
        navigate(`/configuracoes/${id}`);
    }

    return (
        <ContainerPage>
            <PagHome>
                <div className='minhaloja'>
                    <h1>{petshop?.map((petshop) => (petshop.name))}</h1>
                    <h1>{petshop?.map((petshop) => (petshop._id))}</h1>

                </div>
                <form onSubmit={view}>
                    <SubmitButton text='Ver Minha Loja' name="add" />
                </form>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;