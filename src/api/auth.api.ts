import { SignupProps } from "../pages/Singup";
import { httpClient } from "./http";

export const signup = async(userData: SignupProps) => {
    const response = await httpClient.post("/users/join", userData)
    return response.data;
}