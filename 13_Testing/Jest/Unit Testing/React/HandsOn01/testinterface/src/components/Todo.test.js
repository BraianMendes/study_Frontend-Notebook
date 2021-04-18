import React from 'react'
import { fireEvent, render, waitForElement } from '@testing-library/react'

import Todo from './Todo'

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Todo/>)

        //buscar o input
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        )

        //digitar no input
        fireEvent.change(
            fieldNode, 
            { target: { value: 'testing' } }
        )

        //buscar o botão
        expect(fieldNode.value).toEqual('testing')

        //clicar no botão
        //buscar a tabela
        //verificar se a tarefa foi adicionada na tabela
    })
})