import { createSlice } from '@reduxjs/toolkit'
import { storeData } from "../../assets/data/dummyData"


    export const productSlices = createSlice({
        name: "products",
        initialState : {
            filteredProduct: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
            singleProduct : JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
            error: false
        },
        reducers: {
            filteredProduct (state, action) {
                try {
                    const filter = storeData.filter((product) => product.type === action.payload)
                    state.filteredProduct = filter
                    state.error = false
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
            },
            //loc san pham theo gioi tinh
            filterGender (state,action) {
              try{
                const gender = state.filteredProduct.filter((product) => product.gender === action.payload)
                state.error = false
                state.filteredProduct = gender
                const oneGenderType = gender.length > 0

                if(oneGenderType) {
                    state.error = false
                    const saveState = JSON.stringify(gender)
                    sessionStorage.setItem("filteredData", saveState)
                }else {
                    state.error = true
                    state.filteredProduct = []
                }
              }catch(err){
                return err
              }
            },
            // sap xep theo gia giam dan
            sortByPrice (state,action) {
                try{
                    //gia tri am(-) cho biết a phải đứng trước b
                    //gia trị dương(+) cho biết a phải đứng sau b
                    const price = state.filteredProduct.sort((a,b) => a.price > b.price ? -1 : 1)
                    state.filteredProduct = price
                    let count = price.length
                    if(count > 1) {
                        const noError = false   
                        state.error = noError
                        if( !noError) {
                            state.filteredProduct = price
                            const saveState = JSON.stringify(price)
                             // giữ lại trạng thái của danh sách sản phẩm khi đã được sắp xếp
                            sessionStorage.setItem("filteredData",saveState)
                        }
                    }else {
                        state.error = true
                        state.filteredProduct = []
                    }
                }catch(err){ 
                    return err
                }
            }, 
            //loc san pham theo mau
            filterByColor (state,action) {
                try{
                    const color = state.filteredProduct.filter((product) => product.color.includes(action.payload))
                    console.log("color",action.payload)
                    state.error = false
                    state.filteredProduct = color
                    if(color.length < 0) {
                        state.error = true
                        state.filteredProduct = []
                    }else {
                        state.error = false
                        state.filteredProduct = color
                        const saveState = JSON.stringify(color)
                        // giữ lại trạng thái của danh sách sản phẩm khi đã được tìm kiếm
                        sessionStorage.setItem("filteredData",saveState)
                    }
                }catch(err){
                    return err
                }
            },
            //loc san pham theo size
            filterBySize (state, action) {
                try{
                    const size = state.filteredProduct.filter((product) => product.size.includes(action.payload))
                    state.error = false
                    state.filteredProduct = size
                    if(size.length < 0) {
                        state.error = true
                        state.filteredProduct = []
                    }else {
                        state.error = false
                        state.filteredProduct = size
                        const saveState = JSON.stringify(size)
                        // giữ lại trạng thái của danh sách sản phẩm khi đã được tìm kiếm
                        sessionStorage.setItem("filteredData",saveState)
                    }
                }catch(err){
                    return err
                }
            }
        }
    })

export const {  filteredProduct, 
                singleProduct, 
                filterGender, 
                sortByPrice,
                filterByColor,
                filterBySize } = productSlices.actions
export default productSlices.reducer