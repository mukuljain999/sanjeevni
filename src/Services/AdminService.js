import axios from "axios";
import { BASE_URL } from "./APIConstants";



export async function adminLogin(credentials){
    const response=await axios.post(`${BASE_URL}/admin/login`,credentials);
        console.log(response.data);
        return response.data;
}
