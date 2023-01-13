import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagEditProduct } from './styledEditProduct';

import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function EditProduct() {

    const { id } = useParams();

    const [productId, setProductId] = useState([]);

    useEffect(() => {
        api.getProductsById(id).then((resposta) => setProductId(resposta))
    }, [id]);

    return (
        <ContainerPage>
            <h1>TESTE</h1>
            <PagEditProduct>
                <div className="prodid">
                    {/* <p>Id: {productId?.map((product) => (product._id))}</p> */}
                </div>
                <div className="itens">
                    <p>Nome: {productId?.map((product) => (product.name))}</p>
                    <p>Descrição: {productId?.map((product) => (product.description))}</p>
                    <p>Preço: {productId?.map((product) => (product.price))}</p>
                    <p>Quantidade: {productId?.map((product) => (product.stock))}</p>
                    <p>Categoria: {productId?.map((product) => (product.category))}</p>

                    <SubmitButton text='Salvar' />
                </div>
            </PagEditProduct>
        </ContainerPage >
    );

}

export default EditProduct;