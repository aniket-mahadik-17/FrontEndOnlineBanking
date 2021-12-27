import axios from "axios";

const BASE_URL= "http://localhost:8080";

export const getFarmerList =()=>{
    return axios.get(BASE_URL+"/farmer/list");
};

export const getFarmerById=(farmerId)=>{
    return axios.get(BASE_URL+"/farmer/get"+farmerId)
};