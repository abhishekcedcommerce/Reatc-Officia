import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Reaturant cards component with props data", () =>{
    render(<RestaurantCard restData={MOCK_DATA}/>);

    const name = screen.getByText("Bikanervala");  //name of restorent
    expect(name).toBeInTheDocument();

});

it("should render Restaurnet Card with Promoted Labels", () => {
    // test Higher order component  with Opened label
});