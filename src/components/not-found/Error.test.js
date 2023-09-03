import { render, screen } from "@testing-library/react";
import Error from "./Error";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('Error component', () => {
    test('render "This Page is Not Found" as a text', () => {
        //Arrange 
        render(
            <MemoryRouter>
                <Error />
            </MemoryRouter>
        );

        //Act
        //... nothing yet

        //Assert
        const notFoundElement = screen.getByText('Page is Not Found', { exact: false });
        expect(notFoundElement).toBeInTheDocument();
    })

    test('render "Go to the Main Page" as a text', () => {
        //Arrange 
        render(
            <MemoryRouter>
                <Error />
            </MemoryRouter>
        );

        //Act
        //... nothing yet

        //Assert
        const notFoundElement = screen.getByText('Go to the Main Page', { exact: false });
        expect(notFoundElement).toBeInTheDocument();
    })

    test('navigates to the expected route on click', () => {
        //Arrange
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        //Act
        const linkElement = screen.getByRole('link');
        userEvent.click(linkElement);

        // Assert
        expect(window.location.pathname).toBe('/');
    });
})
