import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { ContainerPage } from '../../components/Main'
import { PagConfig } from './styledConfig';
import ConfigEdit from './ConfigEdit';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function Configuracoes() {
    const [petshop, setPetShop] = useState([]);

    useEffect(() => {
        api.getPetShop().then((resposta) => setPetShop(resposta))
    }, []);

    return (
        <ContainerPage>
            <h1>Edição dos dados do seu PetShop: {petshop.length >= 0 && petshop.map((petshop) => (petshop._id))}</h1>
            <PagConfig>
                {petshop.length >= 0 && petshop.map((petshop) => (
                    <ConfigEdit id={petshop._id} />
                ))}
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes