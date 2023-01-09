import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Home() {

    const [petshop, setPetShop] = useState([])
    const [servicos, setServicos] = useState([])
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/petshop`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPetShop(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/servicos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setServicos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {

        fetch('http://localhost:5000/produtos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProdutos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ContainerPage>
            <PagHome>
                <div className='minhaloja'>
                    <h1>{petshop?.map((petshop) => (petshop.nome))}</h1>
                </div>
                <div className='corpohome'>
                    <div className='servicos'>
                        <Select text='Serviços Meu PetShop' nome='servicos' options={servicos} />
                    </div>
                    <div className='produtos'>
                        <Select text='Produtos Meu PetShop' nome='produtos' options={produtos} />
                        <SubmitButton text='Adiconar Categorias' name="addcat_id" />
                    </div>
                </div>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;