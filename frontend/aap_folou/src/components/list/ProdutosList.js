import { ProdutoList } from './styledProdutosList';

function ProdutosList({ id, nome, produtos, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }
    return (
        <ProdutoList>
            <p>{nome}</p>
            <p>Produtos: {produtos?.map((produtos) => (produtos.nome))}</p>

            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </ProdutoList>
    )
}

export default ProdutosList