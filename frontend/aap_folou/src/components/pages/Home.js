import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

function Home() {

    function exibirPlanos() {
        return (
            alert('Deu certo')
        )
    }
    return (
        <ContainerPage>
            <PagHome>
                <h1>Home</h1>
                <div className='minhaloja'>
                    <button onClick={exibirPlanos}> Minha Loja </button>
                </div>
                <div className='planos'>
                    <select name='opcoesplano'>
                        <option disabled selected>Plano 1</option>
                        <option  >Plano 2</option>
                        <option  >Plano 2</option>
                    </select>

                </div>
                <div className='brinquedos'>
                    <button onClick={exibirPlanos}> Brinquedos </button>
                </div>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;