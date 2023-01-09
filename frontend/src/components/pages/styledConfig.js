import styled from 'styled-components';

export const PagConfig = styled.div`
    height: 850px;
    background-color: #766452;
    color: black;
    padding: 30px;
    max-width: 1000px;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;

    form{
        width: 70%;
        margin: auto;
        text-align: center;
        padding: 10px;
    }

    .form_dados{       
        width: 100%; 
        margin-right: 50px;
        justify-content: space-between;
    }

    .form_add{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
    }

`;