import styled from "styled-components";

export const PagPedidos = styled.div`
    height: 750px;
    background-color: #766452;
    color: black;
    padding: 30px;
    width: 1000px;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    flex-flow: row wrap;
    overflow: auto;
    
    form{
        display: block;
        padding: 10px;
    }

    .btnnovoprod {
        margin-top: 25px;
    }
`;