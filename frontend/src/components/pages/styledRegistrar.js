import styled from "styled-components";

export const PagRegistrar = styled.div`
    height: 800px;
    background-color: #766452;
    color: black;
    padding: 30px;
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    position: relative;
    

    .form_input {
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 10%;
    }

    label{
        display: block;
    }

    h1{
        margin-top: 50px;
    }

    h2{
        margin-top:50px;
    }

    .logo{
        width: 100%;
        flex: 1;
        img{
            width: 15%;

        }
    }

    .btn{
        position: absolute;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-self: center;
        
    }

    .link{
        position: relative;
        display: block;
        flex-wrap: wrap;
        margin-top: 50%;
    }
`;