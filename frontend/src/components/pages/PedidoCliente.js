import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagPedidoUnico } from './styledPedidoCliente';

import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';
import SelectPayment from "../form/SelectPayment";
import SelectStatus from "../form/SelectStatus";

import api from "../../services/api";
function PedidoCliente() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ordersId, setOrdersId] = useState([]);

    useEffect(() => {
        api.getOrdersById(id).then((resposta) => setOrdersId(resposta))
    }, [id])

    function editOrder(id, ordersId) {
        api
            .editOrders(ordersId, id)
            .then(() => alert(`Editado com sucesso!`))
            .then(() => navigate('/pedidos'))
            .catch((err) => alert(`Erro: ${err.message}`));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editOrder(id, ordersId);
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setOrdersId(editOrder => ({ ...editOrder, [name]: value }))
    }

    return (
        <ContainerPage>
            <h1>Edição do Pedido do Cliente : {ordersId.fk_id_client}</h1>
            <PagPedidoUnico>
                <form onSubmit={handleSubmit}>
                    <Input type='text' text='Id petshop' name='fk_id_pet_shop' placeholder='PetShop' handleOnChange={handleChange} value={ordersId.fk_id_pet_shop} />
                    <Input type='text' text='Id Cliente' name='fk_id_client' placeholder='Cliente' handleOnChange={handleChange} value={ordersId.fk_id_client} />
                    <Input type='text' text='Data de Criação' name='create_date' placeholder='Data de Criação' handleOnChange={handleChange} value={ordersId.create_date} />
                    <SelectPayment text='Método de Pagamento' name='payment_method' handleOnChange={handleChange} value={ordersId.payment_method} />
                    <Input type='text' text='Preço deste Pedido' name='price' placeholder="Preço " handleOnChange={handleChange} value={ordersId.price} />
                    <Input type='text' text='Método de Pagamento' name='payment_method' placeholder="Método de Pagamento" handleOnChange={handleChange} value={ordersId.payment_method} />
                    <Input type='text' text='Cupom' name='fk_cupom' placeholder='Cupom' handleOnChange={handleChange} value={ordersId.fk_cupom} />
                    <SelectStatus text='Status' name='status' value={ordersId.status} />
                    <SubmitButton text='Salvar' />
                </form>
            </PagPedidoUnico>
        </ContainerPage >
    )

}

export default PedidoCliente;