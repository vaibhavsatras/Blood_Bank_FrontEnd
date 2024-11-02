
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {

    isPending: false,
    error:"",
    message:"",
    data:[],
    orgNewData:[]
}

//Create Inventory

export const createInventory = createAsyncThunk('createInventory',async (body)=>{

        const addInventory = await fetch('https://blood-backend-wg3q.vercel.app/inventory/createInventory',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(body)
        })

    return await addInventory.json()

})


//Get Inventory Data

export const getInventory = createAsyncThunk('getInventory',async()=>{

        const getData = await fetch('https://blood-backend-wg3q.vercel.app/inventory/getInventory',{

                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                    authorization: localStorage.getItem('token')
                }
        })

    return await getData.json();

} )



//Get Donar Data

export const getDonarData = createAsyncThunk('getDonarData',async()=>{

    const getData= await fetch('https://blood-backend-wg3q.vercel.app/inventory/getDonar',{

        method:'GET',
        headers:{

            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }

    })

return await getData.json();

})

//Get Hospital Data

export const getHospitals = createAsyncThunk('getHospitals',async ()=>{

    const getHospital = await fetch('https://blood-backend-wg3q.vercel.app/inventory/getHospital',{

        method: 'GET',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }

    })

    return await getHospital.json();

})


//Get Organization

export const getOrg = createAsyncThunk('getOrg',async()=>{

    const getOrgData = await fetch('https://blood-backend-wg3q.vercel.app/inventory/getOrganization',{

        method:'GET',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }

    })

    return await getOrgData.json();

})

const inventoryReducer = createSlice({
    name: 'Inventory',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{


        //Create Inventory

        builder.addCase(createInventory.pending,(state,action)=>{

                state.isPending = true

        })

        builder.addCase(createInventory.fulfilled,(state,action)=>{

                state.isPending = false

                if(action.payload.result)
                {
                    state.message = action.payload.result     
                }
                else
                {
                    state.message = action.payload.error
                }
        })

        //Get Inventory

        builder.addCase(getInventory.pending,(state,action)=>{

                state.isPending = true

        })
        builder.addCase(getInventory.fulfilled, (state,action)=>{

                state.isPending = false

                state.data = action.payload.result
        })

        //Get Danar Data
    
        builder.addCase(getDonarData.pending,(state,action)=>{

            state.isPending = true

        })

        builder.addCase(getDonarData.fulfilled, (state,action)=>{

            state.isPending = false
            state.data = action.payload.result

        })


        //Get Hospital Data

        builder.addCase(getHospitals.pending, (state,action)=>{

            state.isPending = true

        })

        builder.addCase(getHospitals.fulfilled, (state,action)=>{

            state.isPending = false

            state.data = action.payload.result

        })


        //Get Organization

        builder.addCase(getOrg.pending,(state,action)=>{

            state.isPending = true

        })

        builder.addCase(getOrg.fulfilled,(state,action)=>{

                state.isPending = false

                state.orgNewData = action.payload.result

        })
        

    }
    
})


export default inventoryReducer.reducer