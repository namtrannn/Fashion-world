import { createSlice } from '@reduxjs/toolkit'
import { storeData } from "../../assets/data/dummyData"

    export const productSlices = createSlice({
        name: "products",
        initialState : {
            filteredProduct: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
            singleProduct : JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        },
        reducers: {
            filteredProduct (state, action) {
                try {
                    const filter = storeData.filter((product) => product.type === action.payload)
                    state.filteredProduct = filter
                    const saveState = JSON.stringify(filter)
                    sessionStorage.setItem("filteredData", saveState)
                }catch (err) {
                    return err  
                }
            },
            singleProduct (state, action) {
                try{
                    const oneProduct = storeData.filter((product) => product.id === action.payload)
                    state.singleProduct = oneProduct
                    const saveState = JSON.stringify(oneProduct)
                    sessionStorage.setItem("singleProduct",saveState)
                } catch(err) {
                    return err
                }
            }
        }
    })

export const {filteredProduct, singleProduct} = productSlices.actions
export default productSlices.reducer