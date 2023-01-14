import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import PedidosList from '../list/PedidosList';

import api from "../../services/api";

function Pedidos() {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.getOrders().then((resposta) => setOrders(resposta))
    }, []);

    //delete de pedidos pelo id
    function removeOrder(idOrder) {
        api
            .removeOrders(idOrder)
            .then(() => alert("Excluido com sucesso!"))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    function handleClickEdit(idOrder) {
        navigate(`/pedidos/${idOrder}`);
    }

    return (
        <ContainerPage>
            <h1>Pedidos</h1>
            <PagPedidos>
                {orders?.map((orders) => (
                    <PedidosList
                        id={orders._id}
                        key={orders._id}
                        client={orders.client}
                        create_date={orders.create_date}
                        payment_date={orders.payment_date}
                        price={orders.price}
                        payment_method={orders.payment_method}
                        handleRemove={removeOrder}
                        handleEdit={handleClickEdit}
                    />
                ))}

                <div>
                    <form >
                        <Input type='text' text='Data de Criação ' name='create_date' placeholder='Data de Criação' handleOnChange value />
                        <Input type='text' text='Data do Pagamento ' name='payment_date' placeholder='Data do Pagamento' handleOnChange value />
                        <Input type='text' text='Preço deste Pedido ' name='price' placeholder="Preço " handleOnChange value />
                        <Input type='text' text='Método de Pagamento ' name='payment_method' placeholder="Método de Pagamento" handleOnChange value />
                        <Input type='text' text='Status do Pedido ' name='status' placeholder='Status' handleOnChange value />
                        <SubmitButton type="submit" text='Adicionar Novo Pedido' />
                    </form>

                </div>
            </PagPedidos>
        </ContainerPage>
    );
}

export default Pedidos