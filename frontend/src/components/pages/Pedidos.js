import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import SubmitButton from '../form/SubmitButton';

import PedidosList from '../list/PedidosList';

import api from "../../services/api";

function Pedidos() {

    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        api.getOrders().then((resposta) => setOrders(resposta))
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

    function handleClickDelete(idOrder) {
        api
            .removeOrders(idOrder)
            .then(() => alert("Excluido com sucesso!"))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    function handleClickEdit(idOrder) {
        navigate(`/pedidos/${idOrder}`);
    }

    const handleSubmit = (e) => {
        navigate('/newpedido')
    };

    return (
        <ContainerPage>
            <h1>Pedidos</h1>
            <PagPedidos>
                {orders.length >= 0 &&
                    orders.map((orders) => (
                        <PedidosList
                            id={orders._id}
                            key={orders._id}
                            fk_id_client={orders.fk_id_client}
                            fk_id_pet_shop={orders.fk_id_pet_shop}
                            create_date={orders.create_date}
                            payment_date={orders.payment_date}
                            price={orders.price}
                            payment_method={orders.payment_method}
                            fk_cupom={orders.fk_cupom}
                            status={orders.status}
                            handleRemove={handleClickDelete}
                            handleEdit={handleClickEdit}
                        />
                    ))}
                <form onSubmit={handleSubmit}>
                    <SubmitButton text='Criar Pedido' name="add" />
                </form>
            </PagPedidos>
        </ContainerPage>
    );
}

export default Pedidos