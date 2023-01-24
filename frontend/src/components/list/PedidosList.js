import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

function PedidosList({ id, fk_id_client, fk_id_pet_shop, create_date, payment_date, payment_method, price, fk_cupom, status, handleRemove, handleEdit }) {

    const remove = (e) => {
        handleRemove(id);
    }

    const edit = (e) => {
        handleEdit(id);
    }

    return (
        <PedidoList>
            <p>{id}</p>
            <p>Cliente: {fk_id_client}</p>
            <p>Pet Shop: {fk_id_pet_shop}</p>
            <p>{create_date} </p>
            <p>{payment_date} </p>
            <p>{payment_method}</p>
            <p>R${price} </p>
            <p>{fk_cupom}</p>
            <p>{status}</p>

            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
                <button onClick={edit}>
                    <FaRegEdit /> Editar
                </button>
            </div>
        </PedidoList>

    )
}

export default PedidosList