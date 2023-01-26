import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import Input from '../form/Input';
import SelectOrderStatus from '../form/SelectStatus';
import SelectPayment from '../form/SelectPayment';
import SubmitButton from '../form/SubmitButton';

import PedidosList from '../list/PedidosList';

import api from "../../services/api";

function Pedidos() {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.getOrders().then((resposta) => setOrders(resposta))
    }, []);

    function createOrder(orders) {
        api
            .createOrders(orders)
            .then(() => alert(`Criado com sucesso!`))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

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
        createOrder(orders);
    };


    function handleChange(e) {
        setOrders(newOrder => ({ ...newOrder, [e.target.name]: e.target.value }))
    }

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

                <div>
                    <form onSubmit={handleSubmit}>
                        <Input type='text' text='id_client ' name='fk_id_client' placeholder='id_client' handleOnChange={handleChange} value={orders.fk_id_client} />
                        <Input type='text' text='id_pet_shop ' name='fk_id_pet_shop' placeholder='id_pet_shop' handleOnChange={handleChange} value={orders.fk_id_pet_shop} />
                        <Input type='text' text='Data de Criação ' name='create_date' placeholder='Data de Criação' handleOnChange={handleChange} value={orders.create_date} />
                        <Input type='text' text='Data de Pagamento ' name='payment_date' placeholder='Data de Pagamento' handleOnChange={handleChange} value={orders.payment_date} />
                        <Input type='text' text='Preço deste Pedido ' name='price' placeholder="Preço " handleOnChange={handleChange} value={orders.price} />
                        <SelectPayment text='Método de Pagamento' name='payment_method' value={orders.payment_method} handleOnChange={handleChange} />
                        <Input type='text' text='fk_cupom ' name='fk_cupom' placeholder="fk_cupom " handleOnChange={handleChange} value={orders.fk_cupom} />
                        <SelectOrderStatus text='Status do Pedido' name='status' value={orders.status} handleOnChange={handleChange} />
                        <SubmitButton type="submit" text='Adicionar Novo Pedido' />
                    </form>

                </div>
            </PagPedidos>
        </ContainerPage>
    );
}

export default Pedidos