import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userReducer'
import inventoryReducer from './inventoryReducer'
import donationReducer from './donationReducer'
import analyticsReducer  from './analyticsReducer'
import adminReducer from './adminReducer'

const store = configureStore({
    reducer:{
        
        userSlice,
        inventoryReducer,
        donationReducer,
        analyticsReducer,
        adminReducer
    }
})

export default store