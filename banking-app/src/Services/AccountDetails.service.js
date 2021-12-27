import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAccountDetailsList =()=>{
    return axios.get(BASE_URL+"/accountdetails/getAll");
}

export const getAccountById=()=>{
    return axios.get(BASE_URL+"/farmer/get/16")
};

export const onAccountDeleteClickHandler=(accountNumber)=>{
    axios.delete(BASE_URL+"/accountdetails/delete/"+accountNumber).then((response)=>{
       if(response){
           console.log(response);
        getAccountDetailsList();
        alert("Account "+accountNumber+" Deleted");
    }
})
}