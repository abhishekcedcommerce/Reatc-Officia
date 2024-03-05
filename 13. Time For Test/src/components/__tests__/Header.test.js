import Header from "../Header";
import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with the login button", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    
    );

    // const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name : "Login"});
    expect(loginButton).toBeInTheDocument();


});


it("should load Header component with cart item 0", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    
    );

    const cartItem = screen.getByText("Cart (0)");
    expect(cartItem).toBeInTheDocument();


});


it("should load Header component with cart", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    
    );

    const cartItemName = screen.getByText(/Cart/);
    expect(cartItemName).toBeInTheDocument();


});

it("should change login button to logout on click", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Log-Out"});

    expect(logoutButton).toBeInTheDocument();
    
});