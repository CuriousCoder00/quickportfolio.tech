import axios, { AxiosResponse } from "axios";
import { SignupInput, UserLoginInput } from "@repo/validators/user";
import { api, axiosInstance } from "./api.config";

export const loginService = async (data: UserLoginInput) => {
    try {
        const response = await axiosInstance.post(api.login, data
        ) as AxiosResponse;
        console.log(response)
        if (response.data.token) {
            localStorage.setItem('writeup_token', response.data.token);
        }
        return { message: response.data.message, status: response.status, user: response.data.user };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const signupService = async (data: SignupInput) => {
    try {
        const response = await axiosInstance.post(api.register, data) as AxiosResponse;
        return { message: response.data.message, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}