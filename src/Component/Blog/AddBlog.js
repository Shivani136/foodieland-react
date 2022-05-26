import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { AddRecipe, AllCategory } from '../../Config/Commonapi';
import { addBlog, getAllCategory} from '../../Config/Commonapi';

function AddBlog() {

    const [data, setData] = useState([]);
   const [userId, setUserId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  // const [blogFAQ, setBlogFAQ] = useState("");
  const [blogFAQtitle, setBlogFAQTitle] = useState("");
  const [blogFAQdescription, setBlogFAQDescription] = useState("");
  const [blogFAQimage, setBlogFAQImage] = useState([]);
  const [_id, _setId] = useState(null);

const saveFile = (e) => {
    setImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  } 

  
  const blogImage = (e) => {
    setBlogFAQImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  } 

  const saveVideo = (e) => {
    setVideo(e.target.files[0])
     console.log("videookh ", e.target.files[0])
  }



  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {

    await axios.get('/getAllCategory')
      .then((response) => { setData(response.data) })
    //.then((response) => { console.log(response.data) });

  }



  function Update(e) {
    e.preventDefault();
  // console.log(image, "imagess")
 //  console.log(video, "videojj")
     let formData = new FormData();
    let item = {image ,video, userId, categoryId,subTitle, title,description,blogFAQtitle,
        blogFAQdescription,blogFAQimage}

    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
     console.warn("item", item, "oddd")
     axios.post('/addBlog',formData).then(
       res => {
       
         console.log(res)
       }).catch(
       err => {
         console.log(err)
       }
     )
}
    
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
              {/* <h5 class="card-title text-center mb-5 fw-light fs-5">Welcome To Recipe Blog Page</h5>
   */}
              <form onSubmit={Update}>
              
  
  
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} required autofocus/>
                  <label >Title</label>
                </div>

                <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={subTitle} onChange={(e) => { setSubTitle(e.target.value) }} required autofocus/>
                  <label >SubTitle </label>
                </div>

                 <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} required autofocus/>
                  <label >Description</label>
                </div>

                <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={userId} onChange={(e) => { setUserId(e.target.value) }} required autofocus/>
                  <label >User Id</label>
                </div>
  
                <div class="form-floating mb-3 ">
               
               <div class="form-group" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} required autofocus>
               <label class="float-left">Category ID</label>
                 <select class="form-control" name="category" required autofocus>
                   <>
            
                       <option defaultValue></option>
                         {data.map((item, index) => (
                          // console.log(item.categoryName,"gitruyrt9"),
                           <option key={index} value={item._id}>
                             {item.categoryName}
                           </option>
                         ))}
                      </>
                 </select>
                 
                </div>
             </div>


                <div class="form-floating mb-3">
              
                  <input type="file" class="form-control"  onChange={(e) => saveFile(e)} name="image" required autofocus />
                  <label>Image</label>
                </div>
  
                <div class="form-floating mb-3">
              
              <input type="file" class="form-control"  onChange={(e) => saveVideo(e)} name="video" required autofocus />
              <label>Video</label>
              </div>

             
  
                 <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={blogFAQtitle} onChange={(e) => { setBlogFAQTitle(e.target.value) }} required autofocus/>
                  <label >BlogFAQ Title </label>
                </div>
  
              
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" value={blogFAQdescription} onChange={(e) => { setBlogFAQDescription(e.target.value) }} required autofocus/>
                  <label >BlogFAQ Description </label>
                </div>
  
  
                <div class="form-floating mb-3">
                <input type="file" class="form-control"  onChange={(e) => blogImage(e)} name="image" required autofocus />
                  <label >BlogFAQ Image </label>
                </div>
  
               
  
                <div class="d-grid mb-2 pt-2">
                  <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Add Blog</button>
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


export default AddBlog;