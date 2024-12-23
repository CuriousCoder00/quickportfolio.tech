import axios, { AxiosResponse } from "axios";
import { UserSignupInput, UserLoginInput } from "@repo/validators/user";
import { api, axiosInstance } from "./api.config";

export const loginService = async (data: UserLoginInput) => {
    try {
        const response = await axiosInstance.post(api.login, data
        ) as AxiosResponse;
        console.log(response)
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return { success: response.data.success, message: response.data.message, status: response.status, user: response.data.user };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { success: false, message: error.response?.data.message };
        }
        throw error;
    }
}

export const signupService = async (data: UserSignupInput) => {
    try {
        const response = await axiosInstance.post(api.register, data) as AxiosResponse;
        return { success: response.data.success, message: response.data.message, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { success: false, message: error.response?.data.message };
        }
        throw error;
    }
}