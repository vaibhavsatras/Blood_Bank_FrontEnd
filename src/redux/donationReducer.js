import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {

    isPending: false,
    error: "",
    data:[],
    message:"",
    consumers:[]
}

//Get Donations

export const getDonations = createAsyncThunk('getDonation',async()=>{

    const getDonation = await fetch('https://blood-backend-wg3q.vercel.app/donar/donation',{

    method:'POST',
    headers:{
        'Content-Type':'applications/json',
        authorization:localStorage.getItem('token')
    }

    })

    return await getDonation.json();

})


//Get Consumers

export const getConsumers = createAsyncThunk('getConsumers', async()=>{

    const getConsumer  = await fetch('https://blood-backend-wg3q.vercel.app/donar/consumer',{

        method: 'POST',
        headers:{
            'Content-Type':'applications/json',
            authorization:localStorage.getItem('token')
        }
    
    })

return await getConsumer.json()

})



const donationReducer = createSlice({

    name: 'Donations',
    initialState,
    reducers:{},

    extraReducers: (builder)=>{

        builder.addCase(getDonations.pending,(state,action)=>{

            state.isPending = true

        })

    builder.addCase(getDonations.fulfilled,(state,action)=>{

        state.isPending = false;

        state.data = action.payload.result
    })

    //Get Consumer

    builder.addCase(getConsumers.pending,(state,action)=>{

        state.isPending = true

    })

    builder.addCase(getConsumers.fulfilled,(state,action)=>{

            state.isPending = false

            state.consumers = action.payload.result

    })

    }

})

export default donationReducer.reducer