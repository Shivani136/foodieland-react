import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import '../../Assest/Login.css';

import { api } from '../../Config/Commonapi';

function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function logins(e) {
    e.preventDefault();

    let item = { email, password }
    console.warn("item", item, "oddd")

    const data = {
      email: email,
      password: password,

    }
    axios.post('/signIn', data).then(
      res => {
        const user = (res.data)

        localStorage.setItem("userdata", JSON.stringify(user))

        this.student = JSON.parse(localStorage.getItem("userdata"));
        localStorage.setItem("token", res.data.token);

        console.log(res)
      }

    ).catch(
      err => {
        console.log(err)
      }
    )

  }

  console.log(api, "api")

  return (

    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-img-left d-none d-md-flex">

              </div>
              <div class="card-body p-5 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Welcome To Recipe Blog Page</h5>

                <form onSubmit={logins}>

                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus />
                    <label >Email</label>
                  </div>


                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} required autofocus />
                    <label >Password</label>
                  </div>
                  <a class="d-block text-center mt-2 small" href="/forgetpassword">Forget Password</a>
                  <div class="d-grid mb-2 pt-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Login</button>
                  </div>

                  <a class="d-block text-center mt-2 small" href="/dashboard">Have you have not account? Sign Up</a>



                </form>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>


  )
}


export default Login;

