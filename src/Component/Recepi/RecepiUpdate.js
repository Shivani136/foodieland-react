import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { EditRecipe, AllCategory } from '../../Config/Commonapi';
import { useParams } from 'react-router-dom';

function RecepiUpdate() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [cookTime, setCookTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [_id, _setId] = useState(null);
  const [datas, _setDatas] = useState(null);

  let newData = []
  const temp = useParams()


  //console.log(temp.id, "fdsffs")

  useEffect(() => {
    //ids.push(datas)
    fetchData();
    GetRecipe();
  
  

  }, []);


  
 

  async function fetchData() {

    await axios.get('/getAllCategory')
      .then((response) => { setList(response.data) })
    //.then((response) => { console.log(response.data) });
  }

  async function GetRecipe() {
    await axios.get('/v1/getAllRecipes')
      .then((response) => { setData(response.data) });

  }


  function Update(e) {
    e.preventDefault();
    //ids.push(datas)

   console.log(Image, "imagess")
  let formData = new FormData();
    let item = { cookTime, prepTime, title, description, image, video, categoryId }
    alert(temp.id, "this is id ");

    for (var key in item) {
      formData.append(key, item[key])
    }
    //console.log(">>>>>>>>>",temp.id)

   // console.log(JSON.parse(ids[0]), "idsssssssssssssssss")
    axios.put(`http://95.111.202.157:8001/api/editRecipe?id=${temp.id}`, formData).then(
      res => {
        console.log(res, "itennmmmmmmmmmmm", item)
      }
    ).catch(
      err => {
        console.log(err.response.data.message, "ffff")
      }
    )
  }



  const saveFile = (e) => {
    setImage(e.target.files[0])
    //console.log("imageghgfh ", e.target.files[0])
  }

  const saveVideo = (e) => {
    setVideo(e.target.files[0])
    // console.log("videookh ", e.target.files[0])
  }


  
   const hello = data.filter((user) => (
     user.recipeId._id === temp.id ? newData.push(user) : ""
  

    ))
    console.log(newData && newData.length ?newData[0].recipeId.title:"","jjjjjjjjjjjjjjj")
    
  



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

                <form onSubmit={Update}>



                <label className='float-left pb-1 '>Title</label> 
         
                 <input type="text"  class="form-control pb-2"  placeholder={newData && newData.length ?newData[0].recipeId.title:""} onChange={(e) => { setTitle(e.target.value) }} required autofocus />
                 
                 <label className='float-left pt-2'>Description</label>
                    <input type="text" class="form-control" placeholder={newData && newData.length ?newData[0].recipeId.description:""} onChange={(e) => { setDescription(e.target.value) }} required autofocus />
                 
                    <label className='float-left pt-2 '>Cook Time</label>
                     <input type="text" class="form-control" placeholder={newData && newData.length ?newData[0].recipeId.cookTime:""} onChange={(e) => { setCookTime(e.target.value) }} required autofocus />
               
                  
                    <label className='float-left pt-2'>Preep Time</label>
   
                    <input type="text" class="form-control" placeholder={newData && newData.length ?newData[0].recipeId.prepTime:""} onChange={(e) => { setPrepTime(e.target.value) }} required autofocus />
                 
  


                  <div class="form-floating mb-3 ">

                    <div class="form-group" placeholder={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} required autofocus>
                      <label class="float-left pt-2">Category ID</label>
                      <select class="form-control" name="category" required autofocus >
                        <>

                          <option defaultValue></option>
                          {list.map((item, index) => (
                            // console.log(item.categoryName, "list"),
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
