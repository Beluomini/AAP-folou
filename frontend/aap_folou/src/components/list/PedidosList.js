import { Link } from 'react-router-dom';

import { GrFormView } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

function PedidosList(props) {

    const { id, name, servico, brinquedo, handlView, handleRemove } = props;

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <PedidoList>
            <h4>{name}Dados dinamicos da lista de pedidos</h4>
            <p>{servico}</p>
            <p>{brinquedo}</p>

            <div>
                <Link to={`/pedidos/${id}`}>
                    <GrFormView /> Ver Pedido
                </Link>
                <button>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </PedidoList>

    )
}

export default PedidosList