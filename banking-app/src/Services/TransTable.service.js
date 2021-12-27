import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getTransactionList =()=>{
    return axios.get(BASE_URL+"/transactiontable/getAll");
}