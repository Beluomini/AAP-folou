import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import Login from './Login';
import Register from './Register'

describe('<Login />', () => {
  const tree = renderer.create(<Login />).toJSON();

  it('tela de login deve ser renderizada', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('<Register />', () => {
  it('tela de registro deve ser renderizada', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('tamanho CPF no Registro deve ter 11 numeros e 3 marcadores,', () => {
  it('CPF deve ter 14 digitos no registro (123.456.789-10)', async () => {
    const { getByPlaceholderText } = render(<Register />);
    const cpfInput = getByPlaceholderText('CPF');

    fireEvent.changeText(cpfInput, '12345678910');
    expect(cpfInput.props.value.length).toBe(14);
  });
});