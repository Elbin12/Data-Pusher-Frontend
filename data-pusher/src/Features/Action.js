import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountsListService, CreateAccountService, CreateDestinationService, DeleteAccountService, DeleteDestinationService, LoginService, SignupService, UpdateAccountService, UpdateDestinationService } from "./Service";

export const signup = createAsyncThunk(
    'signup',
    async (data, {rejectWithValue}) => {
        try{
            const response = await SignupService(data); 
            return response.data;
        }catch (error){
            console.log(error, 'error signup')
            return rejectWithValue(error?.response?.data)
        }
    }
);

export const login = createAsyncThunk(
    'login',
    async (data, {rejectWithValue}) => {
        try{
            const response = await LoginService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data)
        }
    }
);

export const accountsList = createAsyncThunk(
    'accountsList',
    async (data, {rejectWithValue})=>{
        try{
            const response = await AccountsListService()
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const createAccout = createAsyncThunk(
    'createAccount',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await CreateAccountService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const updateAccout = createAsyncThunk(
    'updateAccount',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await UpdateAccountService(data);
            console.log('kkk');
            
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const deleteAccout = createAsyncThunk(
    'deleteAccount',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await DeleteAccountService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const createDestination = createAsyncThunk(
    'createDestination',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await CreateDestinationService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const updateDestination = createAsyncThunk(
    'updateDestination',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await UpdateDestinationService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const deleteDestination = createAsyncThunk(
    'deleteDestination',
    async (data, {rejectWithValue}) =>{
        try{
            const response = await DeleteDestinationService(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error?.response?.data);
        }
    }
);