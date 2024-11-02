
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState  = {

    isPending: false,
    message:"",
    error: "",
    token:"",
    user:''
}

const commonFunction = async (api,data)=>{

    const userData = await fetch(api,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    return await userData.json()

}


//User Register
export const userReducer = createAsyncThunk('User Register',(body)=>{

        const newUser = commonFunction('https://blood-backend-wg3q.vercel.app/user/signUp',body)
        
        return newUser
}) 


//User Sign In

export const userSignin = createAsyncThunk('User SignIn',async(body)=>{

    const newUser = commonFunction('https://blood-backend-wg3q.vercel.app/user/signIn',body)
    
    const data = await newUser

    console.log(data)
    
    if(data.result && data.user.role === 'Organization')
    {
        window.location.replace('/')

    } else if( data.result && data.user.role === 'User')
    {
        window.location.replace('/organization')
    } else if(data.result && data.user.role === 'Hospital')
    {
        window.location.replace('/organization')
    } else if(data.result && data.user.role === 'Admin')
    {
        window.location.replace('/adminHome')
    }

    return data
    
}) 

//Get User

export const getCurrentUser = createAsyncThunk('Get User',async()=>{

    const newUser = await fetch('https://blood-backend-wg3q.vercel.app/user/currentUser',{

        method: 'GET',
        headers:{
            'Content-Type':'application/json',
            authorization: localStorage.getItem('token')
        }
    })
    
    return await newUser.json();
}) 


const userSlice = createSlice({

        name: 'User Register',
        initialState,
        reducers:{

            getToken: (state,action)=>{

               state.token = localStorage.getItem('token');

            }

        },
        extraReducers: (builder)=>{
            builder.addCase(userReducer.pending,(state,action)=>{
                    state.isPending = true
            })
            builder.addCase(userReducer.fulfilled,(state,action)=>{

                    state.isPending = false
                    
                    if(!action.payload.error)
                    {
                        state.message = action.payload.result
                        
                    }
                    else
                    {
                        state.error = action.payload.error
                    }
                
            })

            builder.addCase(userReducer.rejected,(state,action)=>{

                    state.isPending = false
                    state.error = action.payload.error

            })

            //Sign In

            builder.addCase(userSignin.pending,(state,action)=>{
                    state.isPending = true
            })
            builder.addCase(userSignin.fulfilled,(state,action)=>{

                
                if(!action.payload.error)
                {
                    state.isPending = false
                    if(!action.payload.error)
                    {
                        state.token = action.payload.result
                        localStorage.setItem('token',state.token)
                        
                    }
                }
                else
                {
                    state.error = action.payload.error
                }

            })

            builder.addCase(getCurrentUser.pending,(state,action)=>{

                    state.isPending = true

            })
            builder.addCase(getCurrentUser.fulfilled,(state,action)=>{

                    state.isPending = false
                    if(!action.payload.error)
                    {
                        state.user = action.payload.result
                    }
                    else
                    {
                        state.error = action.payload.error
                    }
            })

        }

})

export default userSlice.reducer
export const{getToken} = userSlice.actions