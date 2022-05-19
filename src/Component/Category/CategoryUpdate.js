import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { UpdateCategory } from '../../Config/Commonapi';

function CategoryUpdate() {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState([]);
  const [_id, _setId] = useState(null);

  const saveFile = (e) => {
    setImage(e.target.files[0])
    console.log("imageghgfh ", e.target.files[0])
  }

  useEffect(() => {
    axios.get('/getAllCategory')
      .then((response) => {
        setData(response.data)
        setCategoryName(response.data[0].categoryName)
        setImage(response.data[0].image)
        _setId(response.data[0]._id)
      });
  }, []);


  function selectUser(id) {
    let item = data[id - 1];
    setCategoryName(item.categoryName)
    setImage(item.image)
    _setId(item.id)
  }

  function Update(e) {
    e.preventDefault();
    console.log(Image, "imagess")
    alert(_id, "this is id ");
    let formData = new FormData();
    let item = { categoryName, image }
    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.log(">>>>>>>>>", _id)
    console.warn("item", item, "oddd")
    axios.put(`http://95.111.202.157:8001/api/updateCategory?id=${_id}`, formData).then(
      res => {
        console.log(res, "itennmmmmmmmmmmm", item)
      }
    ).catch(
      err => {
        console.log(err.response.data.message, "ffff")
      }
    )


  }

  console.log(UpdateCategory, "UpdateCategory")

  return (
    <div className='container pt-5'>


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
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} />
                    <label>Category Name </label>
                    {/* required autofocus for required */}
                  </div>

                  <div class="form-floating mb-3">

                    <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="image" />
                    <label>Image</label>
                  </div>

                  <div class="d-grid mb-2 pt-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Update Category</button>
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
export default CategoryUpdate
