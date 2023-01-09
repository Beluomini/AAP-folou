import { ProdutoList } from './styledProdutosList';
import { FaTrashAlt } from 'react-icons/fa';

function ProdutosList({ id, nome, valor, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }
    return (
        <ProdutoList>
            <p>{nome}</p>
            <p>R${valor}</p>
            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </ProdutoList>
    )
}

export default ProdutosList