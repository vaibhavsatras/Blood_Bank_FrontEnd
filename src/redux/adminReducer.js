
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {

    isPending: false,
    message:"",
    data:[]
}


//Reusable Function

const common = async(api)=>{

    const getApi = await fetch(api,{
        method: 'GET',
            headers:{
                'Content-Type':'application/json',
                authorization: localStorage.getItem('token')
            }
    })

    return await getApi.json()

}


//Get Donar List

export const getDonarlist = createAsyncThunk('getDonarList',()=>{

        const getDonar = common('https://blood-backend-wg3q.vercel.app/donarList/getdonarList')
        return getDonar

})

//Get Hospital List

export const getHospitallist = createAsyncThunk('getHospitalList',()=>{

    const getHospital = common('https://blood-backend-wg3q.vercel.app/donarList/gethospitalList')
    return getHospital

})

//Get Organizations

export const getOrganizations = createAsyncThunk('getOrganizations',()=>{

    const getOrg = common('https://blood-backend-wg3q.vercel.app/donarList/getorganizationList')
    return getOrg

})


//Delete Donar

export const deleteDonar = createAsyncThunk('deleteDonar',async(id)=>{

    const deleteData = await fetch(`https://blood-backend-wg3q.vercel.app/donarList/deleteDonar/${id}`,{

        method: 'DELETE',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }
    })
    
    return await deleteData.json();
})

//Delete Hospital

export const deleteHospital = createAsyncThunk('deleteHospital',async(id)=>{

    const deleteData = await fetch(`https://blood-backend-wg3q.vercel.app/donarList/deleteHospital/${id}`,{

        method: 'DELETE',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }
    })
    
    return await deleteData.json();
})

//Delete Organization

export const deleteOrg = createAsyncThunk('deleteOrg',async(id)=>{

    const deleteData = await fetch(`https://blood-backend-wg3q.vercel.app/donarList/deleteOrg/${id}`,{

        method: 'DELETE',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }
    })
    
    return await deleteData.json();
})



const adminReducer = createSlice({
    name: 'Admin reducer',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{

            //Donar List

            builder.addCase(getDonarlist.pending,(state,action)=>{
                state.isPending = true
            })

            builder.addCase(getDonarlist.fulfilled,(state,action)=>{
                    state.isPending = false
                    state.data = action.payload.result
            })

            //Hospital List

            builder.addCase(getHospitallist.pending,(state,action)=>{
                state.isPending = true
            })

            builder.addCase(getHospitallist.fulfilled,(state,action)=>{
                    state.isPending = false
                    state.data = action.payload.result
            })

            //Organization List

            builder.addCase(getOrganizations.pending,(state,action)=>{
                state.isPending = true
            })

            builder.addCase(getOrganizations.fulfilled,(state,action)=>{
                    state.isPending = false
                    state.data = action.payload.result
            })

            //Delete Donar

            builder.addCase(deleteDonar.pending,(state,action)=>{

                state.isPending = true

            })
            builder.addCase(deleteDonar.fulfilled,(state,action)=>{

                state.isPending = false

                state.message = action.payload.result

            })

             //Delete Hospital

             builder.addCase(deleteHospital.pending,(state,action)=>{

                state.isPending = true

            })
            builder.addCase(deleteHospital.fulfilled,(state,action)=>{

                state.isPending = false

                state.message = action.payload.result

            })

            //Delete Org

            builder.addCase(deleteOrg.pending,(state,action)=>{

                state.isPending = true

            })
            builder.addCase(deleteOrg.fulfilled,(state,action)=>{

                state.isPending = false

                state.message = action.payload.result

            })
    }
})



export default adminReducer.reducer