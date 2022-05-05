import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Assest/Login.css';
import { SendMail,resetPassword } from '../../Config/Commonapi';

function ForgetPassword() {

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");

  function sendmail(e) {
        e.preventDefault();
       let data = { email}
       console.warn("data", data, "oddd")
         axios.post('/sendMail',data).then(
           res => {
            localStorage.setItem("token", res.data.token);
             console.log(res.data.token , res)
           }).catch(
           err => {
             console.log(err)
           }
         )
    
      
    }
  console.log(SendMail,"SendMail") 

  return (
    <div>
    <div class="container">
       <div class="row">
           <div class="col-lg-10 col-xl-6 mx-auto">
               <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                  
                   <div class="card-body p-5 p-sm-5">
                       <h3><i class="fa fa-lock fa-4x"></i></h3>
                       <h2 class="text-center">Forgot Password?</h2>
                       <p>You can reset your password here.</p>

                       <form onSubmit={sendmail}>
                       <div class="panel-body">
                           <div class="form-floating mb-3">
                               <input type="email" class="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus />
                               <label >Email</label>
                           </div>
                           <hr />
                           <div class="d-grid mb-2 pt-2">
                           <a  href="/resetpassword" class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">
                         <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Reset Password</button> 
                         </a>
                        
                           </div>  
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
  )
}
export default ForgetPassword;