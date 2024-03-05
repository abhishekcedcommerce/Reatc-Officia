import { render, screen } from "@testing-library/react" ;
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page test page", () => {
    test("should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    // it is just and alias of test
    it("should load button inside component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        
        /**
         * const button = screen.getByTexy("Submit");
         * const button = screen.getByText("Random");  -- throws an error bcs it is not in dom
         */
        expect(button).toBeInTheDocument();
    });
    
    
    
    test("should load input nameinside component", () => {
        render(<Contact />);
        const button = screen.getByPlaceholderText("name")
        
        /**
         * const button = screen.getByTexy("Submit");
         *  const button = screen.getByPlaceholderText("name1")  -- throws an error bcs it is not in dom
         */
        expect(button).toBeInTheDocument();
    });
    
    
    test("should load to input boxes on the component", () => {
        // rendering
        render(<Contact />);
        // Querring
        const inputboxes = screen.getAllByRole("textbox");
        // console.log(inputboxes);
        /**
         * const inputboxes = screen.getByTexy("Submit");
         *  const inputboxes = screen.getByPlaceholderText("name1")  -- throws an error bcs it is not in dom
         */
        expect(inputboxes.length).toBe(2);
    });
})



