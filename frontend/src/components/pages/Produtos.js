import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import SubmitButton from '../form/SubmitButton';

import ProdutosList from '../list/ProdutosList';

import api from "../../services/api";

function Produtos() {
    const petshop = localStorage.getItem('petshopid') //como string
    const petshopFormat = petshop ? JSON.parse(petshop) : undefined //como objeto
    const [products, setProducts] = useState(
        {
            fk_id_pet_shop: petshopFormat,
        }
    );
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        api.getProductsPetshop(petshopFormat).then((res) => {
            if (res.length == 0) {
                alert("Nenhuma pedido encontrado!")
            }
            setProducts(res)
        })

    }, []);

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


    function handleClickEdit(idProducts) {
        navigate(`/produtos/${idProducts}`);
    }

    function handleClickDelete(idProducts) {
        api
            .removeProducts(idProducts)
            .then(() => {
                alert("Excluido com sucesso!")
                const novo = products.filter((products) => products._id !== idProducts);
                setProducts(novo);
            })
            .catch((err) => alert(`Erro: ${err.message}`));
    }
    const handleSubmit = (e) => {
        navigate('/newproduto')
    };


    return (
        <ContainerPage>
            <h1>Produtos</h1>
            <PagProdutos>
                {products.length >= 0 &&
                    products.map((products) => (
                        <ProdutosList
                            id={products._id}
                            key={products._id}
                            description={products.description}
                            name={products.name}
                            price={products.price}
                            stock={products.stock}
                            category={products.category}
                            handleRemove={handleClickDelete}
                            handleEdit={handleClickEdit}
                        />
                    ))}
                <form onSubmit={handleSubmit}>
                    <SubmitButton text='Criar Produto' name="add" />
                </form>
            </PagProdutos>
        </ContainerPage>
    );
}

export default Produtos