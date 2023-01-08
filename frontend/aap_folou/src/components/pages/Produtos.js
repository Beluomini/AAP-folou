import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Produtos() {

    return (
        <ContainerPage>
            <h1>Produtos</h1>
            <PagProdutos>
                <div className='produtos'>
                    <h2>Produto Dados dinamicos</h2>
                </div>

                <form>
                    <Input type='text' text='Nome do Produto ' name='nome' placeholder='Nome do Produto' />
                    <Input type='text' text='Quantidade deste Produto ' name='quantidade' placeholder="Quantidade deste Produto" />
                    <Input type='text' text='Valor deste Produto ' name='valor' placeholder="Valor do Produto" />
                </form>

                <div className='btnnovoprod'>
                    <SubmitButton text='Adicionar Novo Produto' />
                </div>

            </PagProdutos>
        </ContainerPage>
    );
}

export default Produtos