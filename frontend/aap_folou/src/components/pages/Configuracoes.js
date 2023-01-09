import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagConfig } from './styledConfig';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Configuracoes() {

    const [servicos, setServicos] = useState([]);
    const [animais, setAnimais] = useState([]);
    const [petshop, setPetShop] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/petshop`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPetShop(data);
            })
            .catch((err) => console.log(err));
    }, []);

    function editarPetshop() {
        fetch(`http://localhost:5000/petshop`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPetShop(data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/servicos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setServicos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/animais`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setAnimais(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        editarPetshop(petshop)
    }

    function handleChange(e) {
        setPetShop(petshop => ({ ...petshop, [e.target.name]: e.target.value }))

    }

    return (
        <ContainerPage>
            <h1>Edição dos dados do seu PetShop</h1>
            <PagConfig>
                <form onSubmit={submit}>
                    <div className='form_dados'>
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.nome} text='Nome Estabelecimento' name='nome' placeholder='Nome do Estabelecimento' handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.endereco} text='Insira o Endereço ' name='endereco' placeholder="Endereço" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.telefone} text='Telefone para Contato' name='telefone' placeholder="Telefone para Contato" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.email} text='Insira o Email ' name='email' placeholder="Email" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.senha} text='Insira sua Senha ' name='senha' placeholder="Senha" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.confirma_senha} text='Confirmar Senha' name='csenha' placeholder="Confirmação Senha" handleOnChange={handleChange} />))}
                    </div>
                    <div className='endereco'>
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.cep} text='CEP' name='cep' placeholder="CEP" />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.cidade} text='Cidade' name='cidade' placeholder="Cidade" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.estado} text='Estado' name='estado' placeholder="Estado" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.rua} text='Rua/Avenida' name='rua' placeholder="Rua/Avenida" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.numero} text='Número' name='numero' placeholder="Número" handleOnChange={handleChange} />))}
                        {petshop.length >= 0 && petshop.map((petshop) => (<Input type='text' value={petshop.complemento} text='Complemento' name='complemento' placeholder="Complemento" handleOnChange={handleChange} />))}
                    </div>
                    <div className='form_add'>
                        <Select text='Serviços' name='servicos' options={servicos} />
                        <Input type='text' text='Adicionar novo Serviço ' name='addservico' placeholder="Novo Serviço" />
                        <Select text='Animais' name='animais' options={animais} />
                        <Input type='text' text='Adicionar novo Animal ' name='addanimal' placeholder="Novo Animal" />
                        <SubmitButton text='Salvar' />
                    </div>
                </form>
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes