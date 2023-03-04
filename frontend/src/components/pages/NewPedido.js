import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { ContainerPage } from '../../components/Main'
import { PagNewPedido } from './styledNewPedido';

import Input from '../form/Input';
import SelectOrderStatus from '../form/SelectStatus';
import SelectPayment from '../form/SelectPayment';
import SubmitButton from '../form/SubmitButton';

import api from "../../services/api";

function NewPedido() {
    const petshop = localStorage.getItem('petshopid') //como string
    const petshopFormat = petshop ? JSON.parse(petshop) : undefined //como objeto
    const [orders, setOrders] = useState(
        {
            fk_id_client: '',
            fk_id_pet_shop: petshopFormat,
        }
    );
    const [user, setUser] = useState()
    const navigate = useNavigate();

    function handleChange(e) {
        setOrders(newOrder => ({ ...newOrder, [e.target.name]: e.target.value }))
    }

    function createOrder(orders) {
        api
            .createOrders(orders)
            .then(() => alert(`Criado com sucesso!`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        if (orders.payment_date === undefined) {
            delete (orders.payment_date)
        }
        if (orders.create_date === undefined) {
            delete (orders.create_date)
        }
        createOrder(orders);
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

    return (
        <ContainerPage>
            <h1>Criação de um novo Pedido</h1>
            <PagNewPedido>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Input type='text' text='id_client' name='fk_id_client' placeholder='id_client' handleOnChange={handleChange} value={orders.fk_id_client} />
                        <Input type='text' text='Data de Criação ' name='create_date' placeholder='Data de Criação' handleOnChange={handleChange} value={orders.create_date} />
                        <Input type='text' text='Data de Pagamento ' name='payment_date' placeholder='Data de Pagamento' handleOnChange={handleChange} value={orders.payment_date} />
                        <Input type='text' text='Preço deste Pedido ' name='price' placeholder="Preço " handleOnChange={handleChange} value={orders.price} />
                        <SelectPayment text='Método de Pagamento' name='payment_method' value={orders.payment_method} handleOnChange={handleChange} />
                        <Input type='text' text='fk_cupom ' name='fk_cupom' placeholder="fk_cupom " handleOnChange={handleChange} value={orders.fk_cupom} />
                        <SelectOrderStatus text='Status do Pedido' name='status' value={orders.status} handleOnChange={handleChange} />
                        <SubmitButton type="submit" text='Adicionar Novo Pedido' />
                    </form>
                </div>
            </PagNewPedido>
        </ContainerPage>

    );
}

export default NewPedido