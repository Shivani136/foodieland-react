import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import '../../Assest/Login.css';
import { Resetpassword } from '../../Config/Commonapi';

 function ResetPassword() {
    const [data, setData] = useState([]);
    const [newPassword, setNewPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
 
 function resetPassword(e) {
        e.preventDefault();
       const token = localStorage.getItem("token");
       let data = { newPassword, confirmPassword,token}
       console.warn("data", data, "oddd")
         axios.put('/resetPassword',data).then(
           res => {
            console.log(token , res)
            window.location.href('/login')
           }).catch(
           err => {
             console.log(err)
           }
         )
    
      
    }

    console.log(Resetpassword,"Resetpassword") 


    return (
        <div>
             <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xl-6 mx-auto">
                        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            {/* <div class="card-img-left d-none d-md-flex">
                             </div> */}
                            <div class="card-body p-5 p-sm-5">
                                <h3><i class="fa fa-lock fa-4x"></i></h3>
                                <h2 class="text-center">Forgot Password?</h2>
                                <p>You can reset your password here.</p>

                                <form onSubmit={resetPassword}>
                                <div class="panel-body">
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} required autofocus />
                                        <label >NewPassword</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required autofocus />
                                        <label >ConfirmPassword</label>
                                    </div>
                                    <hr />
                                    <div class="d-grid mb-2 pt-2">
                                        <a href="/"  class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">
                                        <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" href="/">Submit</button>
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
export default ResetPassword;
