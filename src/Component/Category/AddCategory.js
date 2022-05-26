import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import '../../Assest/Registration.css';
import { addCategory } from '../../Config/Commonapi';

function AddCategory() {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState([]);
  const [_id, _setId] = useState(null);

  const saveFile = (e) => {
    setImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  }

  function Update(e) {
    e.preventDefault();
    console.log(image, "imagess")
    let formData = new FormData();
    let item = { categoryName, image }

    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.warn("item", item, "oddd")
    axios.post('/addCtegory', formData).then(
      res => {

        console.log(res)
      }).catch(
        err => {
          console.log(err)
        }
      )


  }

  //console.log(addCategory, "addCategory")
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

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} required autofocus />
                    <label >Category Name</label>
                  </div>

                  <div class="form-floating mb-3">

                    <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="image" required autofocus />
                    <label>Image</label>
                  </div>

                  <div class="d-grid mb-2 pt-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Add Category</button>
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


export default AddCategory;

