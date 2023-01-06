import React, { useState, useEffect } from 'react';

import { ContainerPage } from '../../components/Main'
import { PagPedidos } from './styledPedidos';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Pedidos() {

    return (
        <ContainerPage>
            <h1>Pedidos</h1>
            <PagPedidos>
                <div className='pedidos'>
                    <h2>Pedido 1</h2>
                </div>
            </PagPedidos>
        </ContainerPage>

    );
}

export default Pedidos