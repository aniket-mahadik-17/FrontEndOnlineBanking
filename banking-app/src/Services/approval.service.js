import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getApprovalList =()=>{
    return axios.get(BASE_URL+"/approval/getAll");
}