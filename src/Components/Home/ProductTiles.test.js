import React, { useContext} from "react";
import { render, screen } from "@testing-library/react";
import ProductTiles from "./ProductTiles";
import { CartContext } from "../../Context/Context";

test("If component render", () => {
    render(<CartContext.Provider value={products}>
        <ProductTiles/>
    </CartContext.Provider>)

    expect(screen.getByText(/hats/i)).toBeInTheDocument();
})