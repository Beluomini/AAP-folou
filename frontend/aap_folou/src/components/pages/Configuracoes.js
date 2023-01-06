import React, { useState } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagConfig } from './styledConfig';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Configuracoes() {

    function exibirPlanos() {
        return (
            alert('Deu certo')
        )
    }
    // function handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // function handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    return (
        <ContainerPage>
            <PagConfig>
                <h1>Edição dos dados</h1>
                <form>
                    <div className='form_control'>
                        <Input type='text' text='Nome Estabelecimento ' name='nome' placeholder='Nome do Estabelecimento' />
                        <Input type='text' text='Telefone para Contato' name='telefone' placeholder="Telefone para Contato" />
                        <Input type='text' text='Email' name='email' placeholder="Email" />
                        <Input type='text' text='Senha' name='senha' placeholder="Senha" />
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
                <div className='servico'>
                    <Select text='Serviços' name='servico' />
                </div>
                <div>
                    <SubmitButton text='Salvar' />
                </div>
            </PagConfig>
        </ContainerPage>

    );
}

export default Configuracoes