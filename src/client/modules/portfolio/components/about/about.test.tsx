import React from "react";
import { render, screen } from "@testing-library/react";
import About from './about'
import { BrowserRouter } from "react-router-dom";

describe('About', () => {
    test('should render with exploding', () => {
        render(<BrowserRouter><About /></BrowserRouter>);
        const text = screen.getByText("About Me");
        expect(text).toBeInTheDocument();
    })
})