#React S26 Testing React Apps

1. Testing React Apps (Unit Tests) (Automated testing)
    1. What is “Testing”? And Why?
    2. Understading Unit Tests
    3. Testing React Components & Building Block

2. What is and why Testing?
1. Manual Testing
    1. Write Code<> Preview & Test in browser
    2. Very important: You see what your users will see
    3. ====> Error-Prone: It’s hard to test all possible combinations and scenarios
2. Automated Testing
    1. Code that tests your code
    2. You test the individual building blocks of your app
    3. ====> Very technical but allows you to test all building blocks at once
3. Understanding Different Kinds of tests
    1. Unit Tests
        1. Test the individual building blocks (functions, components) in isolation
        2. Projects typically contain dozens or hundreds of unit tests
        3. Test most common / important kind of test
    2. Integration Tests
        1. Test the combination of multiple building blocks
        2. Projects typically contain a couple of integration tests
        3. Also important but focus on unit tests in most cases
    3. End-to-End (e2e) Tests
        1. Test complete scenarios in your app as the user would experience them
        2. Projects typically contains only a few e2e tests
        3. Important but can also be done manually (partially)
4. What to Test  & How to Test
    1. What to Test
        1. Test the different building blocks
        2. Unit Tests: The smallest building blocks that make up your app
    2. How?
        1. Test success and error cases, also test rare (but possible) results
        2.
5. Understanding the technical setup & involved tools
    1. Required tools & Setup
        1. We need a tool for running our tests and asserting the results
            1. Jest
        2. We need a tool for “Simulating” (rendering) our React app / components
            1. React Testing Library
    2. Both tools are already set up for you when using create-react-app
    3. How the test works
        1. Create a file named greeting.test.js
        2. Npm test  = to run the test
        3. The test watches your changes
    4. Writing tests - The Three “A”s
        1. Arrange  => Set up the test data, test conditions and test enviroment
        2. Act => Run logic that should be tested(e.g: execute function)
        3. Assert => Compare execution results with expected resultstest('renders Hello World as a text', () => {     render(<Greetings/>)    const greetElmenent = screen.getTextById(“hi”)    greetElmenent.expecttbeinDocumentation()}
6. Grouping Tests Together with test suites
    1. describe('Greeting component', () => {         test('renders Hello World as a text', () => { …..} }
7. Testing User Interaction & State
    1. const buttonElement = screen.getByRole('button')userEvent.click(buttonElement)
8. Testing Connected Components
    1. Same as normal way
9. Testing Asynchronous Code
    1. Add async await in the test that are async like fetch used in useEffect
10. Working with Mocks
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
10. Summary & Further Resources
    1. Check the official doc of jest and react testing library
    2. Jest doc: https://jestjs.io/docs/getting-started
    3. React Testing library: https://testing-library.com/docs/react-testing-library/intro/
    4. React Hooks Testing Library: https://react-hooks-testing-library.com/
