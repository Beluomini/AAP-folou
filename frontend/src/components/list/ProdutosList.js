import { ProdutoList } from './styledProdutosList';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

function ProdutosList({ id, name, price, description, img, stock, category, handleRemove, handleEdit }) {

    const remove = (e) => {
        handleRemove(id);
        e.preventDefault();
    }

    const edit = (e) => {
        handleEdit(id);
        e.preventDefault();
    }

    return (
        <ProdutoList>
            <p>{name}</p>
            <p>{description}</p>
            <p>R${price}/Unidade</p>
            <p>Quantidade: {stock}</p>
            <p>Categoria: {category}</p>
            <img src={img} />
            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
                <button onClick={edit}>
                    <FaRegEdit /> Editar
                </button>
            </div>
        </ProdutoList>
    )
}

export default ProdutosList