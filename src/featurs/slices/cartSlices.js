import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload  
                try{
                    // kiem tra xem sanpham da co trong Cart chua
                    const exist = state.cart.find(
                        (product) =>    product.id === productId.id &&
                                        product.size === productId.size &&
                                        product.color === productId.color 
                        )
                    if(exist){
                        exist.amount++
                        exist.totalPrice += productId.price
                        state.totalAmount++
                        state.price += productId.price
                    }else {
                        state.cart.push({
                            id: productId.id,
                            price: productId.price,
                            size: productId.size,
                            amount: 1,
                            img: productId.img,
                            totalPrice: productId.price,
                            name: productId.name,
                            color: productId.color,
                            text: productId.text
                        }) 
                    }
                    state.totalAmount++
                    state.totalPrice += productId.price
                }catch(err){
                    return err
                }
        },
        removeFromCart : (state,action) => {
            const productId = action.payload
            try{
                //Kiem tra xem co ton tai phan tu can xoa trong cart khong
                const exist = state.cart.find((product) => 
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
                )
                //neu co 1 san pham
                if(exist.amount === 1) {
                    state.cart = state.cart.filter((product) => 
                        product.id !== productId.id ||
                        product.color !== productId.color ||
                        product.size !== productId.size
                    );
                    state.totalAmount--
                    state.totalPrice -= productId.price

                }
                //co nhieu hon 1 san pham
                else {
                    exist.amount--
                    exist.totalPrice -= productId.price
                    state.totalAmount--
                    state.totalPrice -= productId.price
                }
            }catch(err){
                return err
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer