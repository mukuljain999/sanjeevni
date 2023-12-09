import axios from "axios";
import { BASE_URL } from "./APIConstants";



export async function donorLogin(credentials){
    const response=await axios.post(`${BASE_URL}/donor/login`,credentials);
        console.log(response.data);
        return response.data;
}


export async function saveDonor(donorData){
    try {
        const response=await axios.post(`${BASE_URL}/donor`, donorData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}