import { ProdutoList } from './styledProdutosList';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import api from "../../services/api";

function ProdutosList({ id, name, price, description, stock, category, handleRemove, handleEdit }) {

    const navigate = useNavigate();

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    const edit = (e) => {
        e.preventDefault();
        handleEdit(id);
    }

    return (
        <ProdutoList>
            <p>{id}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>R${price}/Unidade</p>
            <p>Quantidade: {stock}</p>
            <p>Categoria: {category}</p>
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