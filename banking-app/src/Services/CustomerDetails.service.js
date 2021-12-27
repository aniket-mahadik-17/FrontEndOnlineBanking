import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getCustomerDetailsList =()=>{
    return axios.get(BASE_URL+"/cust/getAll");
}