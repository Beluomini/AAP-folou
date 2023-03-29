import styled from 'styled-components';

export const Header = styled.div`
    height: 60px;
    background-color: #766452;
    color: #fff;
    width: 100%;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo{
        flex: 1;

        img{
            width: 40px;
        }
    }
        

    nav{
        ul{
            display: flex;
            list-style: none;
        }

        li{
            margin-left: 20px;
        }


    }

`;