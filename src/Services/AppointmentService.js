import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getEmail, getToken } from "../utils/TokenUtils";
//import { getToken } from "../utils/TokenUtils";



export async function saveAppointment(appointmentData) {
    try {
        const email = getEmail();
        const response = await axios.put(`${BASE_URL}/donor/bookAppointment/${email}`, appointmentData, { headers: { 'Authorization': `Bearer ${getToken()}` } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function updateDonorAppointment(donor) {
    try {
        const response = await axios.put(
            `${BASE_URL}/donor/appointment/${donor.email}`,
            { appointmentStatus: true },
            { headers: { 'Authorization': `Bearer ${getToken()}` } }
        ); return response;
    } catch (error) {
        console.log(error);
    }
}

