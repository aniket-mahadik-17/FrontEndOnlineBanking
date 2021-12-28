import './App.css';
import './index.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router";
import ChangePwd from './ChangePwd';
import AddPayee from './AddPayee';
import Imps from './Imps';
import Neft from './Neft';
import Rtgs from './Rtgs';
import Form from './Form';
import NavbarDemo from './NavbarDemo';
import farmer from './farmer';
import AccountDetails from './Components/AccountDetails';
import Admin from './Components/Admin';
import Approval from './Components/Approval';
import CustomerDetails from './Components/CustomerDetails';
import Payee from './Components/Payee';
import TransactionTable from './Components/TransactionTable';
import CustomerCreate from './Components/CustomerCreate';




function App() {
  return (
    <div className="container-xxl">
      {/* <Form/> */}
     {/* <AddPayee/>  */}
     {/* <Imps/> */}
     {/* <Neft/> */}
     {/* <Rtgs/> */}
    <Navbar/><br/>
    
   {/* <AccountDetails/> */}
   {/* <Admin/> */}
   {/* <Approval/> */}
   {/* <CustomerDetails/> */}
   {/* <CustomerCreate/> */}
   {/* <Payee/> */}
   {/* <TransactionTable/> */}
    
    <Routes>
    <Route path={'/changepwd'} element={<ChangePwd/>}></Route>
    <Route path={'/addpayee'} element={<AddPayee/>}></Route>
    <Route path={'/neft'} element={<Neft/>}></Route>
    <Route path={'/rtgs'} element={<Rtgs/>}></Route>
    <Route path={'/imps'} element={<Imps/>}></Route>
    <Route path={'/accdetails'} element={<AccountDetails/>}></Route>
    <Route path={'/custdetails'} element={<CustomerDetails/>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
