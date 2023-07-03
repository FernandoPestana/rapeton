import { configureStore } from "@reduxjs/toolkit";
import nav from './slices/nav.slice'
import banner from './slices/banner.slice'

export default configureStore ({
    reducer: {
        nav,
        banner
    }
})