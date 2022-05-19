import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { user_Detail, EditUser, } from '../../Config/Commonapi';
import { useParams } from 'react-router-dom';

function UserUpdate() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roleId, setRoleId] = useState("");
  const [Image, setImage] = useState([]);
  const [_id, _setId] = useState(null);

  let newData = []
  const temp = useParams()

  const saveFile = (e) => {
    setImage(e.target.files[0])
    console.log("imageghgfh ", e.target.files[0])
  }

  useEffect(() => {
    axios.get('/getAllUsers')
      .then((response) => {
        setData(response.data.data)

      });

  }, []);

  // console.log("$$$$$$$$$$$$$$$idd",( idd.id))
  
  // function selectUser(id) {
  //   let item = data[id - 1];
  //   setFirstName(item.firstName)
  //   setLastName(item.lastName)
  //   setEmail(item.email)
  //   setPhone(item.phone)
  //   setRoleId.roleName(item.roleId)
  //   _setId(item.id)
  // }

  function Update(e) {
    e.preventDefault();
    console.log(Image, "imagess")
    alert(_id, "this is id ");
    let formData = new FormData();
    let item = { roleId, firstName, lastName, email, phone, Image }
    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.log(">>>>>>>>>", _id)
    console.warn("item", item, "oddd")
    axios.put(`http://95.111.202.157:8001/api/edit-user?id=${_id}`, formData).then(
      res => {
        console.log(res, "itennmmmmmmmmmmm", item)
      }
    ).catch(
      err => {
        console.log(err.response.data.message, "ffff")
      }
    )


  }
  // console.log("@@@@@@@@@@@@@@@@@@@@@",data)
  {
    data.filter((user) => (
      user._id === temp.id ? newData.push(user) : ""

    ))
  }
  console.log(EditUser, "EditUser")
  return (
    <div className='container pt-5'>


      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-img-left d-none d-md-flex">
           
              </div>
              <div class="card-body p-5 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Welcome To Recipe Blog Page</h5>
                {/* {console.log("#################newData",newData)} */}
                <form onSubmit={Update}>
                  {newData.map((user) => (
                    <>
                      {console.log("@@@@@@@@@@@@@@@user", user)}
                      <div class="form-floating mb-3 ">
                        <input type="text" class="form-control" onChange={(e) => { setRoleId(e.target.value) }} placeholder={user.roleId.roleName} required autofocus/>
                        <label>ROLE ID</label>
                      
                      </div>



                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" placeholder="dbfhvdsh" onChange={(e) => { setFirstName(e.target.value) }} required autofocus/>
                        <label >First Name</label>
                      </div>


                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" onChange={(e) => { setLastName(e.target.value) }} required autofocus/>
                        <label >Last Name</label>
                      </div>

                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" value={user.email} onChange={(e) => { setEmail(e.target.value) }} required autofocus/>
                        <label >Email</label>
                      </div>

                      <div class="form-floating mb-3">
                        <input type="number" class="form-control" value={user.phone} onChange={(e) => { setPhone(e.target.value) }} required autofocus/>
                        <label >Phone</label>
                      </div>

                      <div class="form-floating mb-3">

                        <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="image" required autofocus/>
                        <label>Image</label>
                      </div>

                      <div class="d-grid mb-2 pt-2">
                        <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Update User</button>
                      </div>
                    </>
                    ))}
                </form>

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default UserUpdate
