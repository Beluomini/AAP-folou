import styled from 'styled-components';

export const PagConfig = styled.div`
    height: 800px;
    background-color: #766452;
    color: black;
    padding: 30px;
    max-width: 1000px;
    margin: auto;
    
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;

    form{
        width: 50%;
        display: flex;
        margin: auto;
        text-align: center;
    }

    .form_dados{       
        width: 100%;
        display: flex; 
        flex-direction :column ;
        margin-right: 50px;
        justify-content: space-between;
    }

    .select_form{
        width: 100%;
        margin-right: 50px;
        justify-content: space-between;
        padding: 20px;
    }

`;