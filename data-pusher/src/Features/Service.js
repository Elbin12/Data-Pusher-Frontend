import { axiosInstance } from "../axios"

export const SignupService = async(data) => {
    return await axiosInstance.post('signup/', data);
}

export const LoginService = async(data)=>{
    return await axiosInstance.post('login/', data);
}

export const AccountsListService = async(data)=>{
    return await axiosInstance.get('account/list/');
}

export const CreateAccountService = async(data)=>{
    return await axiosInstance.post('account/create/', data);
}

export const UpdateAccountService = async(data)=>{
    return await axiosInstance.put(`account/update/${data.id}/`, data);
}

export const DeleteAccountService = async(data)=>{
    return await axiosInstance.delete(`account/delete/${data.id}/`);
}

export const CreateDestinationService = async(data)=>{
    return await axiosInstance.post('destination/create/', data);
}

export const UpdateDestinationService = async(data)=>{
    return await axiosInstance.put(`destination/update/${data.id}/`, data);
}

export const DeleteDestinationService = async(data)=>{
    return await axiosInstance.delete(`destination/delete/${data.id}/`);
}