import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe('Header Component', ()=>{
    test('navigates to Home component on click', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const linkElement = screen.getByRole('link', {name: 'Home'});
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/home');
    });

    test('navigates to About component on click', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const linkElement = screen.getByRole('link', {name: 'About'});
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/about');
    });


    test('navigates to Natiq component on click', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const linkElement = screen.getByRole('link', {name: 'Natiq'});
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/natiq');
    });
})