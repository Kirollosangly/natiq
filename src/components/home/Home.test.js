import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from './Home';


describe('Error component', () => {

    test('It renders an image', () => {
        //Arrange
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        //Assert
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    });

    test('navigates to Natiq component on click', () => {
        //Arrange
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const linkElement = screen.getByText('Try Natiq');
        expect(linkElement).toBeInTheDocument();
        userEvent.click(linkElement);
        expect(window.location.pathname).toBe('/natiq');
    });
})
