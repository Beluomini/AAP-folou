function ProdutosList(props) {

    const { id, name, brinquedo, handlClick } = props;

    return (
        <div>
            <h4>{name}</h4>
            <p>{brinquedo}</p>

            <div>
                <p>Novo produto</p>
            </div>
        </div>

    )
}

export default ProdutosList