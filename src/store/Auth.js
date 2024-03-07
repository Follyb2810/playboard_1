import {configureStore,createSlice} from '@reduxjs/toolkit'
import { cardSlice } from './CardSlice'

export const AuthSlice = createSlice({
    name:'auth',
    initialState:{isLogIn:false},
    reducers:{
        logIn(state,action){
            state.isLogIn =true
        },
        logOut(state,action){
            state.isLogIn =true
        },
    }
})

export const actionAuth = AuthSlice.actions
export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        cart:createSlice.reducer
    }
})

