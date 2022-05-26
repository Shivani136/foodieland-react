import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import '../../Assest/Registration.css';
import { Register } from '../../Config/Commonapi';

 function Registration() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [Image, setImage] = useState([]);
  const [_id, _setId] = useState(null);

  const saveFile = (e) => {
    setImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  }

  function Update(e) {
    e.preventDefault();
   console.log(Image, "imagess")
     let formData = new FormData();
    let item = { firstName, lastName, email,phone, password,Image}

    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
     console.warn("item", item, "oddd")
     axios.post('/register',formData).then(
       res => {
       
         console.log(res)
       }).catch(
       err => {
         console.log(err)
       }
     )

  
   }


  // console.log(Register, "Register")

  return (

    <div>
      <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
             {/* <!-- Background image for card set in CSS! --> */}
           </div>
          <div class="card-body p-5 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Welcome To Recipe Blog Page</h5>

            <form onSubmit={Update}>
            {/* <div class="form-floating mb-3 ">
                <input type="text" class="form-control" value={roleId} onChange={(e) => { setRoleId(e.target.value) }} required autofocus />
                <label>ROLE ID</label>
                {/* required autofocus for required */}
              {/* </div>  */}


              <div class="form-floating mb-3">
                <input type="text" class="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} required autofocus/>
                <label >First Name</label>
              </div>

               <div class="form-floating mb-3">
                <input type="text" class="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value) }} required autofocus/>
                <label >Last Name</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus/>
                <label >Email</label>
              </div>

               <div class="form-floating mb-3">
                <input type="number" class="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }} required autofocus/>
                <label >Phone</label>
              </div>

               <div class="form-floating mb-3">
                <input type="password" class="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} required autofocus/>
                <label >Password</label>
              </div>

              <div class="form-floating mb-3">
            
                <input type="file" class="form-control"  onChange={(e) => saveFile(e)} name="image" required autofocus />
                <label>Image</label>
              </div>

              <div class="d-grid mb-2 pt-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Register</button>
              </div>

              <a class="d-block text-center mt-2 small" href="/login">Have an account? Sign In</a>

            
            </form>
          
          </div>
          
          </div>
          </div>
        </div>
      </div>  
 
    </div>
  
       
  )
}


export default Registration;

// for checkbox click 
{/* <div class="form-group">
<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
<label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
</div> */}

 //for login with social button 

//  <div class="d-grid mb-2">
//  <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
//    <i class="fab fa-google me-2"></i> Sign up with Google
//  </button>
// </div>

// <div class="d-grid">
//  <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
//    <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
//  </button>
// </div>