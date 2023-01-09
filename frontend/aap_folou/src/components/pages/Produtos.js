import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import ProdutosList from '../list/ProdutosList';

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/produtos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProdutos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    //delete de pedidos pelo id
    function removeProduto(id) {
        fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProdutos(produtos.filter((produto) => produto.id !== id));
            })
            .catch((err) => console.log(err));
    }

    return (
        <ContainerPage>
            <h1>Produtos</h1>
            <PagProdutos>
                <div className='produtos'>
                    {produtos?.map((produtos) => (
                        <ProdutosList
                            id={produtos.id}
                            key={produtos.id}
                            nome={produtos.nome}
                            valor={produtos.valor}
                            handleRemove={removeProduto}
                        />
                    ))}
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