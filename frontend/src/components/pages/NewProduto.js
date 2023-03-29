import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { ContainerPage } from '../../components/Main'
import { PagNewProduto } from './styledNewProduto';

import Input from '../form/Input';
import SelectCategory from '../form/SelectCategory';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function NewProduto() {
    const petshop = localStorage.getItem('petshopid') //como string
    const petshopFormat = petshop ? JSON.parse(petshop) : undefined //como objeto
    const [products, setProducts] = useState(
        {
            name: "",
            fk_id_pet_shop: petshopFormat,
            description: "",
            stock: "",
            image: "",
            price: "",
            category: "",
        }

    );
    const [user, setUser] = useState()
    const navigate = useNavigate();

    function handleChange(e) {
        setProducts(newOrder => ({ ...newOrder, [e.target.name]: e.target.value }))
    }

    async function createProduct(products) {
        await api
            .createProducts(products)
            .then(() => alert(`Criado com sucesso!`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(products);
        navigate("/produtos")
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

    const handleVoltar = () => {
        navigate('/produtos')
    }

    return (
        <ContainerPage>
            <h1>Criação de um novo Produto</h1>
            <PagNewProduto>
                <div>
                    <img src='../../../aapfolou4.png' />
                    <form onSubmit={handleSubmit}>
                        <Input type='text' text='Nome do Produto ' name='name' placeholder='Nome do Produto' handleOnChange={handleChange} value={products.name} />
                        <Input type='text' text='Descrição do Produto ' name='description' placeholder='Descrição' handleOnChange={handleChange} value={products.description} />
                        <Input type='number' text='Quantidade deste Produto ' name='stock' placeholder="Quantidade " handleOnChange={handleChange} value={products.stock} />
                        <Input type='text' text='Imagem ' name='image' placeholder='Nome da Img' handleOnChange={handleChange} value={products.image} />
                        <Input type='number' text='Valor deste Produto ' name='price' placeholder="Valor" handleOnChange={handleChange} value={products.price} />
                        <SelectCategory text='Abrir Seleção' name='category' value={products.category} handleOnChange={handleChange} />
                        <SubmitButton type="submit" text='Adicionar Novo Produto' />
                    </form>
                    <form className='voltar' onSubmit={handleVoltar}>
                        <SubmitButton type='submit' text='Voltar' />
                    </form>
                </div>
            </PagNewProduto>
        </ContainerPage>
    );
}

export default NewProduto