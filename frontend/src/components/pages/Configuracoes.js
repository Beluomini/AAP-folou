import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { ContainerPage } from '../../components/Main'
import { PagConfig } from './styledConfig';
import ConfigEdit from './ConfigEdit';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function Configuracoes() {
    const [petshop, setPetShop] = useState([]); //inicializa o estado com um array vazio
    const petshopid = localStorage.getItem('petshopid') //como string
    const petshopidFormat = petshopid ? JSON.parse(petshopid) : undefined //como objeto
    const [user, setUser] = useState()
    const navigate = useNavigate();

    function handleChange(e) {
        setPetShop(editpetshop => ({ ...editpetshop, [e.target.name]: e.target.value }))
    }

    function editPetshop(petshopId, id) {
        api
            .editPetShops(petshopId, id)
            .then(() => alert(`Editado com sucesso!`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        editPetshop(petshop, petshopidFormat);
    };

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
    console.log(petshop)

    return (
        <ContainerPage>
            <h1>Edição dos dados do seu PetShop</h1>
            <PagConfig>
                <form onSubmit={handleSubmit}>
                    <Input type='text' value={petshop.name} text='Nome PetShop ' name='name' placeholder='Nome do Estabelecimento' handleOnChange={handleChange} />
                    <Input type='text' value={petshop.email} text='Insira o Email ' name='email' placeholder="Email" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.password} text='Insira sua Senha ' name='password' placeholder="Senha" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.cnpj} text='CNPJ ' name='cnpj' placeholder="CNPJ" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.contact} text='Telefone para Contato ' name='contact' placeholder="Telefone para Contato" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.cep} text='CEP ' name='cep' placeholder="CEP" />
                    <Input type='text' value={petshop.address} text='Insira o Endereço ' name='address' placeholder="Endereço" handleOnChange={handleChange} />
                    <SubmitButton text='Salvar' />
                </form>
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes