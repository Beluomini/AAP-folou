import styled from 'styled-components';

export const StyleSelect = styled.div`
    .form_control{  
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 25%;
    }
    .fomr_control label{
        margin-bottom: 1em;
        font-weight: bold;
    }
    .form_control select{
        padding: 0.7em;
        border-radius: 10px;
        border: none;
        margin: 5px;
    }
`;