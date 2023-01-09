import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagPedidoUnico } from './styledPedidoCliente';

import SubmitButton from '../form/SubmitButton';
import Select from '../form/Select';

function PedidoCliente() {

    const { id } = useParams();

    const [pedidoId, setPedidoId] = useState([]);

    useEffect(() => {
        //resgatado do banco direto do banco pela id do url
        fetch(`http://localhost:5000/pedidos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPedidoId(data);
            })
            .catch((err) => console.log(err));
    }, [id])

    return (
        <ContainerPage>
            <PagPedidoUnico>
                <div className="pedunico">
                    <h1>Cliente: {pedidoId.cliente}</h1>
                </div>

                <div className="itens">
                    <h1>Itens</h1>
                    <p>Serviços: {pedidoId.servicos?.map((servicos) => (servicos.nome))}</p>
                    <p>Produtos: {pedidoId.produtos?.map((produtos) => (produtos.nome))}</p>

                    <Select text='Status do Pedido' name='status' options={pedidoId.status} />
                    <SubmitButton text='Salvar' />
                </div>
            </PagPedidoUnico>
        </ContainerPage >
    )

}

export default PedidoCliente;