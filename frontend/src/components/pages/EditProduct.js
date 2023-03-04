import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagEditProduct } from './styledEditProduct';

import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';
import SelectCategory from '../form/SelectCategory';

import api from "../../services/api";

function EditProduct() {
    const petshop = localStorage.getItem('petshopid') //como string
    const petshopFormat = petshop ? JSON.parse(petshop) : undefined //como objeto
    const { id } = useParams();
    const [productId, setProductId] = useState(
        {
            fk_id_pet_shop: petshopFormat
        }
    );
    const navigate = useNavigate();

    useEffect(() => {
        api.getProductsById(id).then((resposta) => setProductId(resposta))
    }, [id]);

    function editProduct(productId, id) {
        api
            .editProducts(productId, id)
            .then(() => alert(`Editado com sucesso!`))
            .then(() => navigate('/produtos'))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        editProduct(productId, id);
        navigate("/produtos")
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setProductId(editProdut => ({ ...editProdut, [name]: value }))
    }

    return (
        <ContainerPage>
            <h1>Edição do Produto: {productId.name}</h1>
            <PagEditProduct>
                <form onSubmit={handleSubmit}>
                    <Input type='text' text='Nome do Produto ' name='name' placeholder='Nome do Produto' handleOnChange={handleChange} value={productId.name} />
                    <Input type='text' text='Descrição do Produto ' name='description' placeholder='Descrição' handleOnChange={handleChange} value={productId.description} />
                    <Input type='number' text='Quantidade deste Produto ' name='stock' placeholder="Quantidade " handleOnChange={handleChange} value={productId.stock} />
                    <Input type='text' text='Imagem ' name='image' placeholder='Nome da Img' handleOnChange={handleChange} value={productId.image} />
                    <Input type='number' text='Valor deste Produto ' name='price' placeholder="Valor" handleOnChange={handleChange} value={productId.price} />
                    <SelectCategory text='Abrir Seleção' name='category' value={productId.category} handleOnChange={handleChange} />
                    <SubmitButton type="submit" text='Salvar' />
                </form>
            </PagEditProduct>
        </ContainerPage >
    );

}

export default EditProduct;