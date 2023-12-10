import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getToken } from "../utils/TokenUtils";



export async function donorLogin(credentials){
        const response=await axios.post(`${BASE_URL}/donor/login`,credentials);
        console.log(response);
        return response.data;
}

export async function updateDonor(updatedData){
    try {
        const response = await axios.put(`${BASE_URL}/donor/${updatedData.email}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.date;
    } catch (error) {
        console.log(error);
    }
}


export async function saveDonor(donorData){
    try {
        const response=await axios.post(`${BASE_URL}/donor`, donorData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function getDonorProfile(donorEmail){
    try {
        console.log(donorEmail);
        const response = await axios.get(`${BASE_URL}/donor/${donorEmail}`,{headers:{'Authorization':`Bearer ${getToken()}`}})
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchDonors(){
    try {
        const response=await axios.get(`${BASE_URL}/donor`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
