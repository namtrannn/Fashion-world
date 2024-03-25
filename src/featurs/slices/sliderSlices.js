import { createSlice } from '@reduxjs/toolkit'
import { sliderData } from '../../assets/data/dummyData';

export const sliderSlices = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: sliderData.length,  
    },
    reducers: {
        nextSlider: (state, action) => {
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },
        prevSlider : (state,action) => {
            state.value = action.payload < 0 ? state.length -1 : action.payload
        },
        dotSlider: (state,action) => {
            const slider = action.payload
            state.value = slider
        }
    }
})

export const {nextSlider, prevSlider, dotSlider} = sliderSlices.actions;
export default sliderSlices.reducer;