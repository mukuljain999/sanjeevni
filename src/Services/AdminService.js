import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getToken } from "../utils/TokenUtils";



export async function adminLogin(credentials) {
    const response = await axios.post(`${BASE_URL}/admin/login`, credentials);
    console.log(response.data);
    return response.data;
}




export async function fetchStocks() {
    const response = await axios.get(`${BASE_URL}/bloodstock`,{headers:{'Authorization':`Bearer ${getToken()}`}});
    //console.log("bolod shotl"+response.data);
    return response.data;
}
