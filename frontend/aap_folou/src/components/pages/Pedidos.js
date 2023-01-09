import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import PedidosList from '../list/PedidosList';

function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    const navigate = useNavigate();

    //pegando os pedidos do banco de dados
    useEffect(() => {

        fetch('http://localhost:5000/pedidos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPedidos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    //direcionando para a pagina de pedidos unicos de acordo com o id
    function viewPedidoUnico(id) {
        fetch(`http://localhost:5000/pedidos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                navigate(`/pedidos/${id}`);
            })
            .catch((err) => console.log(err));
    }

    //delete de pedidos pelo id
    function removePedido(id) {
        fetch(`http://localhost:5000/pedidos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPedidos(pedidos.filter((pedido) => pedido.id !== id));
            })
            .catch((err) => console.log(err));
    }

    return (
        <ContainerPage>
            <h1>Pedidos</h1>
            <PagPedidos>
                {pedidos?.map((pedido) => (
                    <PedidosList
                        id={pedido.id}
                        key={pedido.id}
                        cliente={pedido.cliente}
                        nome={pedido.nome}
                        servicos={pedido.servicos}
                        produtos={pedido.produtos}
                        handleRemove={removePedido}
                    />
                ))}
            </PagPedidos>
        </ContainerPage>
    );
}

export default Pedidos