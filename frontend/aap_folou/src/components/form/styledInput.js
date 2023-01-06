import styled from 'styled-components';

export const StyleInput = styled.div`
    .form_control{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .form_control label{
        margin-bottom: 10px;
        font-weight: bold;
    }

    .fomr_control input{
        padding: 10px;
        border-radius: 5px;
    }

    .form_control input::placeholder{
        color: black;
    }
`;