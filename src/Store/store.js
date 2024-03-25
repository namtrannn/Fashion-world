import { configureStore } from "@reduxjs/toolkit"
import sliderReducer from "../featurs/slices/sliderSlices"
import productsReducer from "../featurs/slices/prodcutSlices"
import cardReducer from "../../src/featurs/slices/cardSlices"

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        card: cardReducer
    }
})