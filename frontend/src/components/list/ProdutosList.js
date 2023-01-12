import { ProdutoList } from './styledProdutosList';
import { FaTrashAlt } from 'react-icons/fa';

function ProdutosList({ id, name, price, quantidade, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }
    return (
        <ProdutoList>
            <p>{name}</p>
            <p>Quantidade: {quantidade}</p>
            <p>R${price}/Unidade</p>
            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </ProdutoList>
    )
}

export default ProdutosList