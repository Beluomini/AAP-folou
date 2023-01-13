import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagPedidoUnico } from './styledPedidoCliente';

import SubmitButton from '../form/SubmitButton';
import Select from '../form/Select';

import api from "../../services/api";
function PedidoCliente() {

    const { id } = useParams();

    const [pedidoId, setPedidoId] = useState([]);

    useEffect(() => {
        api.getOrdersById(id).then((res) => setPedidoId(res))
    }, [id])

    return (
        <ContainerPage>
            <PagPedidoUnico>
                <div className="pedunico">
                    <h1>Data do Pedido: {pedidoId.create_date}</h1>
                </div>

                <div className="dados">
                    <p>Data do Pagamento: {pedidoId.payment_date}</p>
                    <p>Valor: R${pedidoId.price}</p>
                    <p>Método de Pagamento: {pedidoId.payment_method}</p>
                    <p>Cupom: {pedidoId.fk_cupom}</p>
                    <p>Status do Pedido: {pedidoId.status}</p>
                    <SubmitButton text='Salvar' />
                </div>
            </PagPedidoUnico>
        </ContainerPage >
    )

}

export default PedidoCliente;