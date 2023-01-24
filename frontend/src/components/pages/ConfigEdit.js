import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'

import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';

import api from "../../services/api";

function ConfigEdit({ id }) {

    const [petshop, setPetShop] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.getPetShopById(id).then((resposta) => setPetShop(resposta))
    }, [id]);

    function editPetshop(petshopId, id) {
        api
            .editPetShop(petshopId, id)
            .then(() => alert(`Editado com sucesso!`))
            .then(() => navigate(`/`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        editPetshop(petshop, id);
    };

    function handleChange(e) {
        setPetShop(editpetshop => ({ ...editpetshop, [e.target.name]: e.target.value }))
    }

    return (
        <ContainerPage>
            <form onSubmit={handleSubmit}>
                <div className='form_dados'>
                    <Input type='text' value={petshop.name} text='Nome PetShop ' name='name' placeholder='Nome do Estabelecimento' handleOnChange={handleChange} />
                    <Input type='text' value={petshop.email} text='Insira o Email ' name='email' placeholder="Email" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.password} text='Insira sua Senha ' name='password' placeholder="Senha" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.cnpj} text='CNPJ ' name='cnpj' placeholder="CNPJ" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.contact} text='Telefone para Contato ' name='contact' placeholder="Telefone para Contato" handleOnChange={handleChange} />
                    <Input type='text' value={petshop.cep} text='CEP ' name='cep' placeholder="CEP" />
                    <Input type='text' value={petshop.address} text='Insira o Endereço ' name='address' placeholder="Endereço" handleOnChange={handleChange} />
                    <SubmitButton text='Salvar' />
                </div>
            </form>
        </ContainerPage >
    );

}

export default ConfigEdit;