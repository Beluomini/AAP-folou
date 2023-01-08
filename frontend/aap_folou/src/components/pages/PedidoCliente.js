import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';

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
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, [id])

    return (

        <p>Teste {pedidoId.Id}</p>
    )

}

export default PedidoCliente;