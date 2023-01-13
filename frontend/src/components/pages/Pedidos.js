import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import PedidosList from '../list/PedidosList';

import api from "../../services/api";

function Pedidos() {

    const [orders, setOrders] = useState([]);

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
                    />
                ))}
            </PagPedidos>
        </ContainerPage>
    );
}

export default Pedidos