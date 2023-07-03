import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice ({
    name: 'banner',
    initialState: true,
    reducers: {
        setBannerGlobal:(state, action) => action.payload
    }
})

export const { setBannerGlobal } = bannerSlice.actions
export default bannerSlice.reducer