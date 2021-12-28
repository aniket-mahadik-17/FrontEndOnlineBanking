import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getCustomerDetailsList =()=>{
    return axios.get(BASE_URL+"/cust/getAll");
}

export const onCustomerDeleteClickHandler=(custId)=>{
    axios.delete(BASE_URL+"/cust/delete/"+custId).then((response)=>{
       if(response){
           console.log(response);
        getCustomerDetailsList();
        alert("Customer "+custId+" Deleted");
    }
})
}