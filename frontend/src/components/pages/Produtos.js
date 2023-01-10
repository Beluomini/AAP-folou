import React, { useState, useEffect } from 'react';
import { Form, Field } from "react-final-form";

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import ProdutosList from '../list/ProdutosList';
import { FaRProject } from 'react-icons/fa';

function Produtos() {

    const [produtos, setProdutos] = useState({});

    //pegando os produtos do banco de dados
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

    function criarProduto(produtos) {
        fetch('http://localhost:5000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produtos),

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert('Produto criado com sucesso!');
            })
            .catch((err) => console.log(err));
    }

    const submit = (e) => {
        e.preventDefault();
        criarProduto(produtos);
    }

    function handleChange(e) {
        setProdutos(({ ...produtos, [e.target.name]: e.target.value }))
        console.log(produtos)
    }

    return (
        <ContainerPage>
            <h1>Produtos</h1>
            <PagProdutos>
                {produtos.length >= 0 &&
                    produtos.map((produtos) => (
                        <ProdutosList
                            id={produtos.id}
                            key={produtos.id}
                            nome={produtos.nome}
                            valor={produtos.valor}
                            quantidade={produtos.quantidade}
                            handleRemove={removeProduto}
                        />
                    ))}
                <div>
                    <form onSubmit={submit}>
                        <Input type='text' text='Nome do Produto ' name='nome' placeholder='Nome do Produto' handleOnChange={handleChange} value={produtos.nome} />
                        <Input type='text' text='Quantidade deste Produto ' name='quantidade' placeholder="Quantidade deste Produto" handleOnChange={handleChange} value={produtos.quantidade} />
                        <Input type='text' text='Valor deste Produto ' name='valor' placeholder="Valor do Produto" handleOnChange={handleChange} value={produtos.valor} />
                        <SubmitButton type="submit" text='Adicionar Novo Produto' />
                    </form>
                </div>
            </PagProdutos>
        </ContainerPage>
    );
}

export default Produtos