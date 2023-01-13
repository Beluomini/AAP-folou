import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import ProdutosList from '../list/ProdutosList';

import api from "../../services/api";

function Produtos() {

    const [products, setProducts] = useState([]); //lista de objetos de produtos
    const [newProduct, setNewProduct] = useState({}); //novo produto é um objeto q vai ser inserido na lista de produtos

    const navigate = useNavigate();


    useEffect(() => {
        api.getProducts().then((resposta) => setProducts(resposta))
    }, []);


    function createProduct(products) {
        api.createProducts(products)
            .then((resposta) => setNewProduct(resposta))
            .then(() => console.log(products))
    }

    function handleClickEdit(idProducts) {
        navigate(`/products/${idProducts}`);
    }

    function handleClickDelete(idProducts) {
        api
            .removeProducts(idProducts)
            .then(() => alert("Excluido com sucesso!"))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(newProduct);
        setProducts(newProduct);
        setNewProduct({});
        console.log(newProduct)
    };

    function handleChange(e) {
        setNewProduct(newProdut => (({ ...newProdut, [e.target.name]: e.target.value })))
    }

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
                <div>
                    <form onSubmit={handleSubmit}>
                        <Input type='text' text='Nome do Produto ' name='nome' placeholder='Nome do Produto' handleOnChange={handleChange} value={products.name} />
                        <Input type='text' text='Descrição do Produto ' name='descricao' placeholder='Descrição' handleOnChange={handleChange} value={products.description} />
                        <Input type='text' text='Quantidade deste Produto ' name='quantidade' placeholder="Quantidade " handleOnChange={handleChange} value={products.stock} />
                        <Input type='text' text='Valor deste Produto ' name='valor' placeholder="Valor" handleOnChange={handleChange} value={products.price} />
                        <Input type='text' text='Categoria do Produto ' name='categoria' placeholder='Categoria' handleOnChange={handleChange} value={products.category} />
                        <SubmitButton type="submit" text='Adicionar Novo Produto' />
                    </form>
                </div>
            </PagProdutos>
        </ContainerPage>
    );
}

export default Produtos