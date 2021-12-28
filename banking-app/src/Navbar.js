import {Component} from "react";
import { Link } from "react-router-dom";
import './index.css';
export default class Navbar extends Component{
    render(){
        return(
            <>
            <div className="p-3 mb-2 bg-info text-dark" id="dashboard">Bank of Magarpatta City</div>
           <div className="navbar">
           <ul class="nav nav-pills">
             
  <li class="nav-item"><Link class="nav-link" to={"#"}>Account Statement</Link></li>
  
  <li class="nav-item dropdown">
    <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"#"} aria-expanded="false">Fund Transfer</Link>
    <ul class="dropdown-menu">
      <li><Link class="dropdown-item" to={"/rtgs"}>RTGS</Link></li>
      <li><Link class="dropdown-item" to={"/neft"}>NEFT</Link></li>
      <li><Link class="dropdown-item" to={"/imps"}>IMPS</Link></li>
      <li><Link class="dropdown-item" to={"/addpayee"}>Add Payee</Link></li>
    </ul>
  </li>

  <li class="nav-item"><Link class="nav-link" to={"/changepwd"}>Change Password</Link></li>
  <li class="nav-item"><Link class="nav-link" to={"/accdetails"}>Account Details</Link></li>
  <li class="nav-item"><Link class="nav-link" to={"/custdetails"}>Customer Details</Link></li>
  <li class="nav-item"><Link class="nav-link" to={"#"}>Acc Summary</Link></li>
</ul>
</div>
</>
        )
    }
    
}