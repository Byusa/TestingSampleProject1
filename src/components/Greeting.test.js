import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // helps us trigger userEvents
import Greeting from './Greeting'

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting/>);

        //Act
        // ... nothing

        //Assert
        //assert get (throw error), query(won't), find (returns a promise)
        const helloWorldElement = screen.getByText('Hello World!', { exact: false})
        expect(helloWorldElement).toBeInTheDocument()
    });

    test('renders It\'s good to see you if button not clicked', () =>{
        render(<Greeting/>);
        const goodToSeeYouElement = screen.getByText('It\'s good to see you!')
        expect(goodToSeeYouElement).toBeInTheDocument()
    })

    test('renders Changed! if button clicked', () =>{
        // Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument()
    })

    test('Does not renders It\'s good to see you if button was clicked', () =>{
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const outputElement = screen.queryByText('It\'s good to see you!') // we queryByText not getByText cause get throws erros
        expect(outputElement).toBeNull()
    })
});
