import { Link } from 'react-router-dom';

import { GrFormView } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

function PedidosList({ id, client, create_date, payment_date, payment_method, price, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <PedidoList>
            <p>{id}</p>
            <p>Cliente: {client}</p>
            <p>{create_date} </p>
            <p>{payment_date} </p>
            <p>{payment_method}</p>
            <p>{price} </p>

            <div className='botoes'>
                <Link to={`/pedidos/${id}`}>
                    <GrFormView /> Ver Pedido
                </Link>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </PedidoList>

    )
}

export default PedidosList