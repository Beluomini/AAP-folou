import styled from "styled-components";

export const PagLogin = styled.div`
    height: 650px;
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
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 20%;
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
            width: 25%;

        }
    }

    .link{
        display: block;
        flex-wrap: wrap;
        margin-top: 220px;
    }
`;