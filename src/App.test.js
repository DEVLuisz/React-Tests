import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App, { calcularNovoSaldo } from './App.js';

describe('Componente Principal', () => {
  describe('Ao abrir o app do Banco...', () => {
    it('Mostrar o nome do banco', () => {
    render(<App />);
    expect(screen.getByText('ByteBank')).toBeInTheDocument();
  })
    it('O saldo é exibido', () => {
    render(<App />);
    expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })
    it('O botão é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })
  describe('Ao realizar uma transação', () => {
    test('Em caso de saque, o valor diminui', () => {
      const valores = {
        transacao: 'saque', 
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 150)
      expect(novoSaldo).toBe(100)
    })

    test('Em caso de saque, a transação deve ocorrer', () => {
      render(<App />);

      const saldo = screen.getByText('R$ 1000');
      const transacao = screen.getByLabelText('Saque');
      const valor = screen.getByTestId('valor');
      const button = screen.getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000')

      fireEvent.click(transacao, { target: { value: 'saque'}});
      fireEvent.change(valor, { target: { value: 10}});
      fireEvent.click(button);

      expect(saldo.textContent).toBe('R$ 990');
    })
  })
})