
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {

    isPending: false,
    error:"",
    data:[],
    message:""        
}


//Create Analytics

export const createAnalytics = createAsyncThunk('createAnalytics', async()=>{

    const getAnalytics = await fetch('https://blood-backend-wg3q.vercel.app/analysis/analytics',{

        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }

    })

    return await getAnalytics.json()

})


const analyticsReducer = createSlice({

    name: 'Analysis',
    initialState,
    reducers:{},

    extraReducers: (builder)=>{

            builder.addCase(createAnalytics.pending,(state,action)=>{

                state.isPending = true

            })
            builder.addCase(createAnalytics.fulfilled,(state,action)=>{

                    state.isPending = false

                    state.data = action.payload.result                
            })
            

    }

})

export default analyticsReducer.reducer