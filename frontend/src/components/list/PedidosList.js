import { Link } from 'react-router-dom';

import { GrFormView } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

function PedidosList({ id, nome, cliente, servicos, produtos, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <PedidoList>
            <p>Cliente: {cliente}</p>
            <p>{nome}</p>
            <p>Serviços: {servicos?.map((servicos) => (servicos.nome))} </p>
            <p>Valor por Serviço: R${servicos?.map((servicos) => (servicos.valor))} </p>
            <p>Produtos: {produtos?.map((produtos) => (produtos.nome))}</p>
            <p>Valor por Produto: R${produtos?.map((produtos) => (produtos.valor))} </p>

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