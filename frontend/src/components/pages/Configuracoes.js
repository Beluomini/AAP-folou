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
    const navigate = useNavigate();

    function handleChange(e) {
        setPetShop(editpetshop => ({ ...editpetshop, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const userFromStorage = localStorage.getItem('petshopid')
        console.log(typeof (userFromStorage))
        console.log((userFromStorage.substring(1, userFromStorage.length - 1)))
        if (!userFromStorage) {
            navigate(`/`);
        }
        else {
            api.getPetShopById(userFromStorage.substring(1, userFromStorage.length - 1)).then((resposta) => setPetShop(resposta))
        }
        console.log(petshop)
    }, []);

    return (
        <ContainerPage>
            <h1>Edição dos dados do seu PetShop: {petshop.length >= 0 && petshop.map((petshop) => (petshop._id))}</h1>
            <PagConfig>
                <Input type='text' value={petshop.name} text='Nome PetShop ' name='name' placeholder='Nome do Estabelecimento' handleOnChange={handleChange} />
                {petshop.length >= 0 && petshop.map((petshop) => (
                    <ConfigEdit />
                ))}
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes