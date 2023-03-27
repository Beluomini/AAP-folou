import styled from "styled-components";

export const PagProdutos = styled.div`
    height: 650px;
    background-color: #766452;
    color: black;
    padding: 30px;
    width: 900px;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    flex-flow: row wrap;
    overflow: auto;
    justify-content: space-between;

    form{
        display: block;
        padding: 15px;
    }

    .btnnovoprod {
        margin-top: 25px;
    }

`;