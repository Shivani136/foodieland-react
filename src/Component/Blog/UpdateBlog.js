import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { EditUser, getAllCategory } from '../../Config/Commonapi';
import { useParams } from 'react-router-dom';

function UpdateBlog() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [_id, _setId] = useState(null);
  const [datas, _setDatas] = useState(null);

  let newData = []
  const temp = useParams()
  //  console.log(temp.id, "fdsffs")


  const saveFile = (e) => {
    setImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  }

  const saveVideo = (e) => {
    setVideo(e.target.files[0])
    // console.log("videookh ", e.target.files[0])
  }

  useEffect(() => {
    //ids.push(datas)
    fetchData();
    GetBlog();
  }, []);
  async function fetchData() {

    await axios.get('/getAllCategory')
      .then((response) => { setList(response.data) })
    //.then((response) => { console.log(response.data) });
  }

  async function GetBlog() {
    await axios.get('/getAllBlog')
      .then((response) => { setData(response.data) });

 }
 function Update(e) {
    e.preventDefault();



    alert(temp.id, "this is id ");
    let formData = new FormData();
    let item = { categoryId, title, subTitle, image, video, description }
    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }

    console.warn("item", item, "oddd")

    axios.put(`http://95.111.202.157:8001/api/updateBlog?id=${temp.id}`, formData).then(
      res => {
        console.log(res, "itennmmmmmmmmmmm", item)
      }
    ).catch(
      err => {
        console.log(err.response.data.message, "ffff")
      }
    )
  }


  {
    data.filter((user) => (
      user._id === temp.id ? newData.push(user) : ""

    ))
  }


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

                <form onSubmit={Update}>

                  {
                    newData.map((user) => (

                      <>
                        {console.log(user, ">>>>>>>>>>>>>")}

                        <label class='float-left pb-1'>Title</label>
                        <input type="text" class="form-control pb-1 text-dark" placeholder={user.title} onChange={(e) => { setTitle(e.target.value) }} required autofocus />

                        <label class='float-left pt-2'>SubTitle</label>
                        <input type="text" class="form-control" placeholder={user.subTitle} onChange={(e) => { setSubTitle(e.target.value) }} required autofocus />


                        <label class='float-left pt-3'>Description</label>
                        <input type="text" class="form-control" placeholder={user.description} onChange={(e) => { setDescription(e.target.value) }} required autofocus />





                        <div class="form-floating mb-3 ">

                          <div class="form-group" required autofocus>
                            <label class="float-left pt-3">Category ID</label>
                            <select onChange={(e) => { setCategoryId(e.target.value) }}
                              class="form-control" name="category" required autofocus>
                              <>

                                <option defaultValue></option>
                                {list.map((item, index) => (
                                  console.log(item.categoryName, "list"),
                                  <option key={index} value={item._id}>
                                    {item.categoryName}
                                  </option>
                                ))}
                              </>
                            </select>

                          </div>
                        </div>


                        <div class="form-floating mb-3">

                          <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="image" required autofocus />
                          <label>Image</label>
                        </div>

                        <div class="form-floating mb-3">

                          <input type="file" class="form-control" onChange={(e) => saveVideo(e)} name="video" required autofocus />
                          <label>Video</label>
                        </div>

                        <div class="d-grid mb-2 pt-2">
                          <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Update Blog</button>
                        </div>
                      </>
                    ))
                  }

                </form>

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default UpdateBlog
