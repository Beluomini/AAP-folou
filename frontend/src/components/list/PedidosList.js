import { useNavigate } from 'react-router-dom';

import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

function PedidosList({ id, client, create_date, payment_date, payment_method, price, handleRemove, handleEdit }) {

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
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
                <button onClick={handleEdit}>
                    <FaRegEdit /> Editar
                </button>
            </div>
        </PedidoList>

    )
}

export default PedidosList