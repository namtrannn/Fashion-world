import { createSlice } from "@reduxjs/toolkit";

export const authSlices = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            image: "",
            authSlices: false
        }
    },
    reducers: {
        login(state, action) {
            const userId = action.payload
            
            const userValidation = /[a-zA-Z]/.test(userId.name)
        
            const passwordValidation =/^(?=.*[a-zA-Z\d\W]).*$/.test(userId.password);
    
            state.user = userId
            if( !userValidation || !passwordValidation) {
                state.user.authSlices = false
            }else {
                state.user.authSlices = true
                const saveState = JSON.stringify(userId)
                sessionStorage.setItem("authUser",saveState)

            }
        },

        logout(state,action) {
            state.user = {
                name: "",
                password: "",
                image: "",
                authSlices: false
            }
            sessionStorage.clear()
        }
    }
})

export const { login,logout } = authSlices.actions
export default authSlices.reducer   