import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Conta from './Conta.js';

describe('O componente de conta', () => {
  test('Exibe o saldo da conta como valor monetario', () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId('saldo-conta');
    expect(saldo.textContent).toBe('R$ 1000');
  })

  test('Quando o botão for clicado...', () => {
    const realizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={realizarTransacao} />);
    fireEvent.click(screen.getByText('Realizar operação'))
    expect(realizarTransacao).toHaveBeenCalled();
  })
})