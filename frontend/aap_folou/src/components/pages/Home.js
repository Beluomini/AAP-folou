import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagHome } from './styledHome';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Home() {

    function exibirPlanos() {
        return (
            alert('Deu certo')
        )
    }
    return (
        <ContainerPage>
            <PagHome>
                <div className='minhaloja'>
                    <SubmitButton text='Minha Loja' />
                </div>
                <div className='corpohome'>
                    <div className='planos'>
                        <Select text='Planos' name='planos_id' />
                    </div>
                    <div className='brinquedos'>
                        <Select text='Brinquedos' name='brinquedos_id' />
                        <SubmitButton text='Adiconar Categorias' name="addcat_id" />
                    </div>
                </div>
            </PagHome>
        </ContainerPage>

    );
}

export default Home;