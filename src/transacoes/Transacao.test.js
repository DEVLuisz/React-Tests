import React from 'react';
import {render} from '@testing-library/react';
import Transacao from './Transacao.js'

describe('Componente de transação' ,( ) => {
  test('O Snapshot do component deve permanecer sempre o mesmo', () => {
    const { container } = render(<Transacao 
    data="08/09/2020"
    tipo="saque"
    valor="20.00"
    />)

    expect(container.firstChild).toMatchSnapshot();
  })
})