import styled from 'styled-components';

export const StyleInput = styled.div`
    .form_control{    
        margin-bottom: 1em;
        margin: auto;
    }
    .fomr_control label{
        margin-bottom: 1em;
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
`;