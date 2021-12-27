import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAdminList =()=>{
    return axios.get(BASE_URL+"/admin/getAll");
}