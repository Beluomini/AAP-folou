import styled from 'styled-components';

export const PagConfig = styled.div`
    height: 800px;
    background-color: #766452;
    color: black;
    padding: 30px;
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;


    form{
        text-align: center;
        width: 50%;
        display: flex;
        margin: auto;
    }

    .form_control{    
        margin-bottom: 1em;
        margin: auto;
        margin-right: 50px;
    }

    .fomr_control label{
        margin-bottom: 0.6em;
        font-weight: bold;
        font-size: 15px;
    }

    .form_control input{
        padding: 0.7em;
        border-radius: 10px;
        border: none;
    }

    .form_control input::placeholder{
        color: #7b7b7b;
    }

    .endereco{
        margin-bottom: 1em;
        margin: auto;
    }
`;