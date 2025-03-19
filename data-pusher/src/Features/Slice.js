import {createSlice} from '@reduxjs/toolkit';
import { accountsList, createAccout, createDestination, deleteAccout, deleteDestination, login, signup, updateAccout, updateDestination } from './Action';


const access_token = localStorage.getItem("access_token");
const refresh_token = localStorage.getItem("refresh_token");
const userDetails = JSON.parse(localStorage.getItem("userDetails"));

const initialState = {
    userDetails: userDetails? userDetails : null,
    accessToken: access_token? access_token : null,
    refreshToken: refresh_token? refresh_token : null,
    loading:false,
    success:false,
    error:'',
    accounts:[],
}

const slice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        resetAll:(state)=>{
            state.userDetails = '';
            state.accessToken = ''
            state.refreshToken = ''
            state.loading = false;
            state.success = false;
            state.error =''
        },
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.error = '';
        }
    },
    extraReducers(builder){
        builder
        .addCase(signup.pending, (state)=>{
            state.pending = true;
        })

        .addCase(signup.fulfilled, (state, action)=>{
            state.success = true;
            state.userDetails = action?.payload?.data;
        })

        .addCase(signup.rejected, (state,action)=>{
            state.error = action?.payload;
        })

        .addCase(login.pending, (state)=>{
            state.pending = true;
        })

        .addCase(login.fulfilled, (state, action)=>{
            console.log(action?.payload, 'payload');
            
            state.accessToken = action?.payload?.access_token
            state.refreshToken = action?.payload?.refresh_token
            state.userDetails = action?.payload?.userDetails

            localStorage.setItem('access_token', action?.payload?.access_token)
            localStorage.setItem('refresh_token', action?.payload?.refresh_token)
            localStorage.setItem('userDetails', JSON.stringify(action?.payload?.userDetails))
        })

        .addCase(login.rejected, (state, action)=>{
            state.error = action?.payload;
            state.success = false;
        })

        .addCase(accountsList.pending, (state)=>{
            state.pending = true;
        })

        .addCase(accountsList.fulfilled, (state, action)=>{
            state.accounts = action?.payload;
            state.pending = false;
        })

        .addCase(accountsList.rejected, (state, action)=>{
            state.error = action?.payload;
            state.success = false;
            state.pending = false;
        })

        .addCase(createAccout.fulfilled, (state, action)=>{
            state.success = true;
            state.accounts = [...state.accounts, action?.payload]
        })

        .addCase(createAccout.rejected, (state, action)=>{
            state.error = action?.payload;
        })

        .addCase(updateAccout.fulfilled, (state, action)=>{
            state.success = true;
            state.accounts = state.accounts.map(account => 
                account.id === action.payload.id ? action.payload : account
            );
        })

        .addCase(updateAccout.rejected, (state, action)=>{
            state.error = action?.payload;
        })

        .addCase(deleteAccout.fulfilled, (state, action)=>{
            console.log('data, flfklf', action?.meta.arg)
            state.success = true;
            state.accounts = state.accounts.filter(account => account.id!==action?.meta.arg.id)
        })

        .addCase(deleteAccout.rejected, (state, action)=>{
            state.error = action?.payload;
        })

        .addCase(createDestination.fulfilled, (state, action)=>{
            state.success = true;
            state.accounts = state.accounts.map(account=>
                account.id === action?.payload?.account 
                    ? {
                        ...account, 
                        destinations:account.destinations
                        ?[ ...account.destinations ,action.payload]
                        : [action.payload]
                    } 
                    : account
            )
        })

        .addCase(createDestination.rejected, (state, action)=>{
            state.error = action?.payload;
        })

        .addCase(updateDestination.fulfilled, (state, action)=>{
            state.success = true;
            state.accounts = state.accounts?.map(account=>
                account.id === action?.payload?.account ? {
                    ...account, 
                    destinations:account.destinations.map(destination =>
                        destination.id === action?.payload?.id ? action?.payload : destination
                    )
                }
                : account
            )
        })

        .addCase(updateDestination.rejected, (state, action)=>{
            state.error = action?.payload;
        })

        .addCase(deleteDestination.fulfilled, (state, action)=>{
            console.log('data, flfklf', action?.meta.arg)
            state.success = true;
            state.accounts = state.accounts.map(account=>
                account.id === action?.meta.arg.account?
                {...account, destinations:account.destinations?.filter(destination=>destination.id !== action?.meta.arg.id)}
                :
                account
            )
        })

        .addCase(deleteDestination.rejected, (state, action)=>{
            state.error = action?.payload;
        })
    }
})

export const {resetAll, reset} = slice.actions;

export default slice.reducer;