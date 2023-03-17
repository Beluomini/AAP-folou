import styled from 'styled-components';

export const StyleInput = styled.div`
    .form_control{    
        margin-bottom: 20px;
        margin: auto;
        padding: 5px;
    }
    .fomr_control label{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 10px;
    }
    .form_control input{
        padding: 10px;
        border-radius: 10px;
        border: none;
    }
    .form_control input::placeholder{
        color: #7b7b7b;
    }
`;