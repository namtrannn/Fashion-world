import { configureStore } from "@reduxjs/toolkit"
import sliderReducer from "../featurs/slices/sliderSlices"
import productsReducer from "../featurs/slices/prodcutSlices"
import cartReducer from "../featurs/slices/cartSlices"

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer
    }
})