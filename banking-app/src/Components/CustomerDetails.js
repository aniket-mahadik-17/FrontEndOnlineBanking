import { useEffect, useState } from "react"
import { getCustomerDetailsList, onCustomerDeleteClickHandler } from "../Services/CustomerDetails.service";


export default()=>{
    const [custDetailsList, setCustDetailsList] = useState([]);

    useEffect(()=>{
        getCustomerDetailsList().then((response)=>{
            console.log(response.data);
            if(response && response.data){
                setCustDetailsList(response.data);
            }
        })
    },[])

    return(
        <>
        <h1 className="text-centre">Customer Details List</h1>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Aadhar Number</th>
                    <th>Email Id</th>
                    <th>Mobile No</th>
                    <th>DOB</th>
                    <th>Balance</th>
                    <th>Occupation Type</th>
                    <th>Income Source</th>
                    <th>Annual Income</th>
                    <th>Residencial Pin Code</th>
                    <th>Debit card</th>
                    <th>Net Banking</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
               {custDetailsList.map((customer)=>{
                   return(
                <tr key={customer.custId}>
                    <td>{customer.custId}</td>
                    <td>{customer.title+" "+customer.firstName+" "+customer.middleName+" "+customer.lastName}</td>
                    <td>{customer.aadharNumber}</td>
                    <td>{customer.email}</td>
                    <td>{customer.mobileNumber}</td>
                    <td>{customer.dob}</td>
                    <td>{customer.initialAmount}</td>
                    <td>{customer.occupationType}</td>
                    <td>{customer.incomeSource}</td>
                    <td>{customer.grossAnnualIncome}</td>
                    <td>{customer.residPincode}</td>
                    <td>{customer.debitCard}</td>
                    <td>{customer.optNetBank}</td>
                    <td><button onClick={()=>{onCustomerDeleteClickHandler(customer.custId)}} className="btn btn-danger">Delete</button></td>
                </tr>
                   )
               })}
            </tbody>
        </table>
        
        </>
    )
}