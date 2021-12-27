import { useEffect, useState } from "react"
import { getFarmerById, getFarmerList } from "./farmer.service";

export default()=>{
    const[farmerList, setFarmerList]=useState([]);

    useEffect(()=>{
        getFarmerList().then((response)=>{
            if(response && response.data){
                setFarmerList(response.data);
            }
        })
    },[]);

    const onGetDetailsClickHandler=(farmerId)=>{
        getFarmerById().then((response)=>{
            if(response&& response.data){
                alert('name: '+response.data.farmerName)
            }
        })
    }

    return(
        <>
        <h1 className="text-centre">Farmer List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
               {farmerList.map((farmer)=>{
                   return(
                <tr key={farmer.farmerId}>
                    <td>{farmer.farmerName}</td>
                    <td>{farmer.farmerContact}</td>
                    <td><button onClick={()=>{
                        onGetDetailsClickHandler(farmer.farmerId);
                    }}>Get Details</button></td>
                </tr>
                   )
               })}
            </tbody>
        </table>
        </>
    )
}