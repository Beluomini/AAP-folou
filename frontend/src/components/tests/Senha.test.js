import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import { BrowserRouter } from 'react-router-dom';

describe('Teste de senha input', () => {
    test('should have at least 6 characters', () => {
        const validPassword = 'molininha';

        const { getByLabelText } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>);
        const input = getByLabelText('Senha');

        fireEvent.change(input, { target: { value: validPassword } });
        expect(input.value).toBe(validPassword);
        expect(input.value.length).toBeGreaterThanOrEqual(6);
    });

    test('should have at least 6 characters', () => {
        const validPassword = 'biska123';

        const { getByLabelText } = render(
            <BrowserRouter>
                <Registrar />
            </BrowserRouter>);
        const input = getByLabelText('Senha');

        fireEvent.change(input, { target: { value: validPassword } });
        expect(input.value).toBe(validPassword);
        expect(input.value.length).toBeGreaterThanOrEqual(6);
    });

});