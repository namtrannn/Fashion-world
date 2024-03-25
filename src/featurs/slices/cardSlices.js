import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: "card",
    initialState: {
        card: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCard: (state, action) => {
            const productId = action.payload
            console.log("action.payload",action.payload)
                try{
                    const exist = state.card.find((product) => 
                        product.id === productId.id &&
                        product.size === productId.size &&
                        product.color === productId.color
                        
                    )
                    if(exist){
                        exist.amount = 10
                        exist.totalPrice += productId.price
                        state.totalAmount++
                        state.price += productId.price
                    }else {
                        state.card.push({
                            id: productId.id,
                            price: productId.price,
                            size: productId.size,
                            amount: 1,
                            totalPrice: productId.price,
                            name: productId.name,
                            color: productId.color
                        })

                        state.totalAmount++
                        state.totalPrice += productId.price
                    }
                }catch(err){
                    return err
                }
        }
    }
})

export const { addToCard } = cardSlice.actions
export default cardSlice.reducer