import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagProdutos } from './styledProdutos';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import SelectCategory from '../form/SelectCategory';

import ProdutosList from '../list/ProdutosList';

import api from "../../services/api";

function Produtos() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.getProducts().then((resposta) => setProducts(resposta))
    }, []);

    function createProduct(products) {
        api
            .createProducts(products)
            .then(() => alert(`Criado com sucesso!`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    function handleClickEdit(idProducts) {
        navigate(`/produtos/${idProducts}`);
    }

    function handleClickDelete(idProducts) {
        api
            .removeProducts(idProducts)
            .then(() => alert("Excluido com sucesso!"))
            .catch((err) => alert(`Erro: ${err.message}`));
    }
    const handleSubmit = (e) => {
        console.log(products)
        createProduct(products);
    };

    function handleChange(e) {
        setProducts(newProdut => ({ ...newProdut, [e.target.name]: e.target.value }))
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
                        <Input type='text' text='Fk id petshop ' name='fk_id_pet_shop' placeholder='Id petshop' handleOnChange={handleChange} value={products.fk_id_pet_shop} />
                        <Input type='text' text='Nome do Produto ' name='name' placeholder='Nome do Produto' handleOnChange={handleChange} value={products.name} />
                        <Input type='text' text='Descrição do Produto ' name='description' placeholder='Descrição' handleOnChange={handleChange} value={products.description} />
                        <Input type='number' text='Quantidade deste Produto ' name='stock' placeholder="Quantidade " handleOnChange={handleChange} value={products.stock} />
                        <Input type='text' text='Imagem ' name='image' placeholder='Nome da Img' handleOnChange={handleChange} value={products.image} />
                        <Input type='number' text='Valor deste Produto ' name='price' placeholder="Valor" handleOnChange={handleChange} value={products.price} />
                        <SelectCategory text='Abrir Seleção' name='category' value={products.category} handleOnChange={handleChange} />
                        <SubmitButton type="submit" text='Adicionar Novo Produto' />
                    </form>
                </div>
            </PagProdutos>
        </ContainerPage>
    );
}

export default Produtos