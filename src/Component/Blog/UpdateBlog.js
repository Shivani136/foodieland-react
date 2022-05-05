import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  EditUser, getAllCategory} from '../../Config/Commonapi';

function UpdateBlog() {

  const [data, setData] = useState([]);

 const [categoryId, setCategoryId] = useState("");
 const [title, setTitle] = useState("");
 const [subTitle, setSubTitle] = useState("");
 const [description, setDescription] = useState("");
 const [image, setImage] = useState([]);
 const [video, setVideo] = useState([]);
//  const [blogFAQ, setBlogFAQ] = useState("");
 const [blogFAQtitle, setBlogFAQTitle] = useState("");
 const [blogFAQdescription, setBlogFAQDescription] = useState("");
 const [blogFAQimage, setBlogFAQImage] = useState([]);
 const [_id, _setId] = useState(null);

    const saveFile = (e) => {
        setImage(e.target.files[0])
         console.log("imageghgfh ", e.target.files[0])
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

    useEffect(() => {
        axios.get('/getAllBlog')
            .then((response) => {
                setData(response.data)
                setCategoryId(response.data[0].categoryId)
                setTitle(response.data[0].title)
                setSubTitle(response.data[0].subTitle)
                setDescription(response.data[0].description)
                setImage(response.data[0].image)
                setVideo(response.data[0].video)
                setBlogFAQTitle(response.data[0].blogFAQtitle)
                setBlogFAQDescription(response.data[0].blogFAQdescription)
                setBlogFAQImage(response.data[0].blogFAQimage)
                _setId(response.data[0]._id)
               
            });
        // .then(response=> {console.log(response.data)
        // console.log(data._id,">>>>>>>>>>>>>>")})
    }, []);

function selectUser(id) {
        let item = data[id - 1];
        setCategoryId(item.categoryId)
        setTitle(item.title)
        setSubTitle(item.subTitle)
        setDescription(item.description)
        // setImage(response.data.data[0].lastName)
        // setVideo(response.data.data[0].email)
        // setBlogFAQ(item.blogFAQ)
        setBlogFAQTitle(item.blogFAQtitle)
        setBlogFAQDescription(item.blogFAQdescription)
        setBlogFAQImage(item.blogFAQimage)
     
        _setId(item.id)

    }

  function Update(e) {
    e.preventDefault();
    console.log(Image, "imagess")
    console.log(video, "video")
    alert(_id, "this is id ");
    let formData = new FormData();
    let item = {categoryId, title ,subTitle, image,video, description,blogFAQtitle, blogFAQdescription,blogFAQimage}
    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.log(">>>>>>>>>",_id)
    console.warn("item", item, "oddd")
    axios.put(`http://localhost:8001/api/updateBlog?id=${_id}`,formData).then(
      res => {
                console.log(res, "itennmmmmmmmmmmm", item)
              }
            ).catch(
              err => {
                console.log(err.response.data.message, "ffff")
              }
            )

  
  }

console.log(EditUser, "EditUser")
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
              
  
  
              <div class="form-floating mb-3">
                <input type="text" class="form-control" value="ytyt" onChange={(e) => { setTitle(e.target.value) }} required autofocus/>
                <label >Title</label>
              </div>

              <div class="form-floating mb-3">
                <input type="number" class="form-control" value={subTitle} onChange={(e) => { setSubTitle(e.target.value) }} required autofocus/>
                <label >SubTitle </label>
              </div>

               <div class="form-floating mb-3">
                <input type="text" class="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} required autofocus/>
                <label >Description</label>
              </div>

         

              <div class="form-floating mb-3 ">
               
               <div class="form-group" required autofocus>
               <label class="float-left">Category ID</label>
                 <select value="ihjghj" onChange={(e) => { setCategoryId(e.target.value) }} 
                 class="form-control" name="category">
                   <>
            
                       <option defaultValue></option>
                         {data.map((item, index) => (
                           console.log(item.categoryName,"gitruyrt9"),
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
                <input type="number" class="form-control" value={blogFAQtitle} onChange={(e) => { setBlogFAQTitle(e.target.value) }} required autofocus/>
                <label >BlogFAQ Title </label>
              </div>

            
              <div class="form-floating mb-3">
                <input type="number" class="form-control" value={blogFAQdescription} onChange={(e) => { setBlogFAQDescription(e.target.value) }} required autofocus/>
                <label >BlogFAQ Description </label>
              </div>


              <div class="form-floating mb-3">
              <input type="file" class="form-control"  onChange={(e) => blogImage(e)} name="image" required autofocus />
                <label >BlogFAQ Image </label>
              </div>

             

              <div class="d-grid mb-2 pt-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Update Blog</button>
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
export default UpdateBlog
