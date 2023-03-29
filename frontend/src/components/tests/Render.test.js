import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import { BrowserRouter } from 'react-router-dom';

describe('Renderizando os Componentes', () => {
    test('Renderizando o componente Login', () => {
        const { getByPlaceholderText, getByText } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(getByText('Bem Vindo Ao AAP FOLOU')).toBeInTheDocument();
        expect(getByText('Faça Login em seu PetShop')).toBeInTheDocument();
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Senha')).toBeInTheDocument();
        expect(getByText('Efetuar Login')).toBeInTheDocument();
        expect(getByText('Não possui registro? Clique aqui!')).toBeInTheDocument();
    });

    test('Renderizando o componente Registrar', () => {
        const { getByPlaceholderText, getByText } = render(
            <BrowserRouter>
                <Registrar />
            </BrowserRouter>
        )
        expect(getByText('Bem Vindo Ao AAP FOLOU')).toBeInTheDocument();
        expect(getByText('Faça o Registro do seu PetShop')).toBeInTheDocument();
        expect(getByPlaceholderText('Nome')).toBeInTheDocument();
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Senha')).toBeInTheDocument();
        expect(getByPlaceholderText('CNPJ')).toBeInTheDocument();
        expect(getByPlaceholderText('Contato')).toBeInTheDocument();
        expect(getByPlaceholderText('CEP')).toBeInTheDocument();
        expect(getByPlaceholderText('Endereço')).toBeInTheDocument();
        expect(getByText('Efetuar Registro')).toBeInTheDocument();
        expect(getByText('Já é Registrado? Clique aqui!')).toBeInTheDocument();
    });

});