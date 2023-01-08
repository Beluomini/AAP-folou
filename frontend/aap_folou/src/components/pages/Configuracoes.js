import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagConfig } from './styledConfig';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useFetcher } from 'react-router-dom';

function Configuracoes(props) {

    //const { btnText } = props;
    const [servicos, setServicos] = useState([]);
    const [animais, setAnimais] = useState([]);

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
                console.log(data);
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
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ContainerPage>
            <PagConfig>
                <h1>Edição dos dados do seu PetShop</h1>
                <form>
                    <div className='form_dados'>
                        <Input type='text' text='Nome Estabelecimento' name='nome' placeholder='Nome do Estabelecimento' />
                        <Input type='text' text='Telefone para Contato' name='telefone' placeholder="Telefone para Contato" />
                        <Input type='text' text='Insira seu Email ' name='email' placeholder="Email" />
                        <Input type='text' text='Insira sua Senha ' name='senha' placeholder="Senha" />
                        <Input type='text' text='Confirmar Senha' name='csenha' placeholder="Confirmação Senha" />
                    </div>
                    <div className='endereco'>
                        <Input type='text' text='CEP' name='cep' placeholder="CEP" />
                        <Input type='text' text='Cidade' name='cidade' placeholder="Cidade" />
                        <Input type='text' text='Estado' name='estado' placeholder="Estado" />
                        <Input type='text' text='Rua/Avenida' name='rua' placeholder="Rua/Avenida" />
                        <Input type='text' text='Número' name='numero' placeholder="Número" />
                        <Input type='text' text='Complemento' name='complemento' placeholder="Complemento" />
                    </div>
                </form>

                <div className='select_form'>
                    <Select text='Serviços' name='servicos' options={servicos} />
                    <Input type='text' text='Adicionar novo Serviço ' name='addservico' placeholder="Novo Serviço" />
                    <Select text='Animais' name='animais' options={animais} />
                    <Input type='text' text='Adicionar novo Animal ' name='addanimal' placeholder="Novo Animal" />
                </div>

                <div>
                    <SubmitButton text='Salvar' />
                </div>
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes