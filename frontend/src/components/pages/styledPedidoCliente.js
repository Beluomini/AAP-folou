import styled from "styled-components";

export const PagPedidoUnico = styled.div`
    height: 600px;
    background-color: #766452;
    color: black;
    padding: 30px;
    max-width: 1000px;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    display: flex;
    flex-direction: column;

    .pedunico{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px;
    }

    .itens{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
