import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    // we are checking if our component behaves better not the fetch request
    test('renders posts if request succeeds', async () => {
        // Mock testing our component
        // jest.fn creates a mock function for you
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            // data is an array
            // we are overriting the fetch request
            json: async () => [{ id: 'p1', title: 'First post' }]
        });
        render(<Async/>)
        // check if list elements are on the screen
        // findAllbyRole for a list and is a promise not a an arry
        // findAllByRole('', {exact}, {default timer (1s)})
        const listItemElements = await screen.findAllByRole('listitem', );
        // there are no items initially and useEffect
        expect(listItemElements).not.toHaveLength(0);
    })

});