import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { EditRecipe ,AllCategory  } from '../../Config/Commonapi';

function RecepiUpdate() {
 const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [cookTime, setCookTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [_id, _setId] = useState(null);

 useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {

    await axios.get('/getAllCategory')
     .then((response) => { setData(response.data) })
    //.then((response) => { console.log(response.data) });
  }
  const saveFile = (e) => {
    setImage(e.target.files[0])
    console.log("imageghgfh ", e.target.files[0])
  }

  const saveVideo = (e) => {
      setVideo(e.target.files[0])
       console.log("videookh ", e.target.files[0])
    }
let index ,item;
  useEffect(() => {
    axios.get('/v1/getAllRecipes')
      .then((response) => {
        setData(response.data)
        {
          console.log(response.data)
        }
        setTitle(response.data.pageContent[0].recipeId.title)
        setDescription(response.data.pageContent[0].recipeId.description)
        setCookTime(response.data.pageContent[0].recipeId.cookTime)
        setPrepTime(response.data.pageContent[0].recipeId.prepTime)
        setCategoryId(response.data.pageContent[0].recipeId.categoryId)
        setImage(response.data.pageContent[0].recipeId.image)
       _setId(response.data[0]._id)

      });
 
  }, []);


  function selectUser(id) {
    let item = data[id - 1];
    setTitle(item.title)
    setDescription(item.description)
    setCookTime(item.cookTime)
    setPrepTime(item.prepTime)
    setImage(item.image)
  //   setVideo(item.video)
   setCategoryId(item.categoryId)
    _setId(item.id)

  }

  function Update(e) {
    e.preventDefault();
    console.log(Image, "imagess")
    let pageContent ;
    
    let formData = new FormData();
    let item = { cookTime, prepTime, title, description, image ,video, categoryId }
    alert(item.pageContent[index].recipeId._id, "this is id ");


    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.log(">>>>>>>>>", _id)
    console.warn("item", item, "oddd")
    axios.put(`http://localhost:8001/api/editRecipe?id=${_id}`, formData).then(
      res => {
        console.log(res, "itennmmmmmmmmmmm", item)
      }
    ).catch(
      err => {
        console.log(err.response.data.message, "ffff")
      }
    )


  }

  console.log(EditRecipe, "EditRecipe")
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
                    <input type="text" class="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} required autofocus />
                    <label >Title</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} required autofocus />
                    <label >Description</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={cookTime} onChange={(e) => { setCookTime(e.target.value) }} required autofocus />
                    <label >Cook Time</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={prepTime} onChange={(e) => { setPrepTime(e.target.value) }} required autofocus />
                    <label >Preep Time</label>
                  </div>


                  <div class="form-floating mb-3 ">
               
               <div class="form-group" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} required autofocus>
               <label class="float-left">Category ID</label>
                 <select class="form-control" name="category">
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

                    <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="image" required autofocus />
                    <label>Image</label>
                  </div>

                  <div class="form-floating mb-3">

                    <input type="file" class="form-control" onChange={(e) => saveVideo(e)} name="video" required autofocus />
                    <label>Video</label>
                  </div>

                  <div class="d-grid mb-2 pt-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Update Recepi</button>
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

export default RecepiUpdate
