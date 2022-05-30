import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Assest/Recepimeta.css';
import { AddRecipesMeta } from '../../Config/Commonapi';

function RecepiMetaAdd() {
  const [data, setData] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [calories, setCalories] = useState("");
  const [totalFat, setTotalFat] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [nutritionTitle, setNutritionTitle] = useState("");
  const [formaindish, setFormaindish] = useState("");
  const [sauce, setSauce] = useState("");
  const [directionTitle, setDirectionTitle] = useState("");
  const [directionDescription, setDirectionDescription] = useState("");
  const [directionImage, SetDirectionImage] = useState("");
  const [_id, _setId] = useState(null);

  let nutritionInformation;
  const saveFile = (e) => {
    SetDirectionImage(e.target.files[0])
    // console.log("imageghgfh ", e.target.files[0])
  }

  function add(e) {
    e.preventDefault();
    console.log(directionImage, "imagess")
    let formData = new FormData();
    let item = {
      recipeId, calories, totalFat, protein, carbohydrates, cholesterol, nutritionTitle, formaindish, sauce,
      directionTitle, directionDescription, directionImage
    }

    for (var key in item) {
      console.log(key, "Gggg", item[key])
      formData.append(key, item[key])
    }
    console.warn("item", item, "oddd")

    axios.post('/addRecipesMeta', formData).then(
      res => {

        console.log(res)
      }).catch(
        err => {
          console.log(err)
        }
      )
  }

  let modalBtns = [...document.querySelectorAll(".button")];
  modalBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    };
  });
  let closeBtns = [...document.querySelectorAll(".close")];
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest(".modal");
      modal.style.display = "none";
    };
  });
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };

  //console.log(AddRecipesMeta, "AddRecipesMeta")

  return (

    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-2 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-body p-sm-5 ">

                <h5 class="card-title text-center mb-5 fw-light fs-5">Welcome To Recipe Meta Add Page</h5>
                {/* <p>
                  <button class="btn btn-primary float-right " data-modal="modalTwo"> + </button>
                </p>
                <div id="modalTwo" class="modal">
                  <div class="modal-content">
                    <div class="contact-form">
                      <span class="close">&times;</span>
                      <form action="/">
                        <div class="form-floating mb-3 ">
                          <input type="text" class="form-control" value={directionTitle} onChange={(e) => { setDirectionTitle(e.target.value) }} required autofocus />
                          <label>Direction Title</label>
                        </div>

                        <div class="form-floating mb-3 ">
                          <input type="text" class="form-control" value={directionDescription} onChange={(e) => { setDirectionDescription(e.target.value) }} required autofocus />
                          <label>Direction Description</label>
                        </div>

                        <div class="form-floating mb-3 ">
                          <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="directionImage" required autofocus />

                          <label>Direction IMAGE</label>

                        </div>


                        <button type="submit" href="/sddf">Submit</button>
                      </form>
                    </div>
                  </div>
                </div> */}


                <form onSubmit={add}>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={recipeId} onChange={(e) => { setRecipeId(e.target.value) }} required autofocus />
                    <label >Recepi ID</label>
                  </div>
                  <hr />
                  <label className='float-left'>Nutrition Information </label>
                  <br></br>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control " value={nutritionTitle} onChange={(e) => { setNutritionTitle(e.target.value) }} required autofocus />
                    <label class='float-left '>Nutrition Title</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={calories} onChange={(e) => { setCalories(e.target.value) }} required autofocus />
                    <label >Calories</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={totalFat} onChange={(e) => { setTotalFat(e.target.value) }} required autofocus />
                    <label >TotalFat </label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={protein} onChange={(e) => { setProtein(e.target.value) }} required autofocus />
                    <label >Protein </label>
                  </div>



                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={carbohydrates} onChange={(e) => { setCarbohydrates(e.target.value) }} required autofocus />
                    <label >Carbohydrates </label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" value={cholesterol} onChange={(e) => { setCholesterol(e.target.value) }} required autofocus />
                    <label >cholesterol </label>
                  </div>
                  <hr />

                  <label className='float-left '>Ingredient </label>
                  <br></br>
                  <br></br>
                  <label className='float-left'> 1. Formaindish </label>
                  <br></br>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" value={formaindish} onChange={(e) => { setFormaindish(e.target.value) }} required autofocus />
                    <label>Formaindish 1</label>

                  </div>

                  <label className='float-left' > 2.Sauce </label>
                  <br></br>
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" value={sauce} onChange={(e) => { setSauce(e.target.value) }} required autofocus />
                    <label>sauce</label>
                  </div>
                  <label className='float-left  '>Direction </label>


                  {/* <a class="btn btn-primary float-right open-button" href="/popup">Open Form</a> */}
                  {/* <button class="open-button" onclick="openForm()">Open Form</button> */}
                  <br></br>
                  <br></br>
                  <br></br>

                  {/* <div class="form-popup" id="myForm">
                    <form class="form-container"> */}
                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" value={directionTitle} onChange={(e) => { setDirectionTitle(e.target.value) }} required autofocus />
                    <label>Direction Title</label>
                  </div>

                  <div class="form-floating mb-3 ">
                    <input type="text" class="form-control" value={directionDescription} onChange={(e) => { setDirectionDescription(e.target.value) }} required autofocus />
                    <label>Direction Description</label>
                  </div>

                  <div class="form-floating mb-3 ">
                    <input type="file" class="form-control" onChange={(e) => saveFile(e)} name="directionImage" required autofocus />

                    <label>Direction IMAGE</label>

                  </div>

                  {/* <button type="submit" class="btn">Login</button>
                      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                    </form>
                  </div> */}
                  <div class="d-grid mb-2 pt-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase">Add Recepi Meta</button>
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


export default RecepiMetaAdd;

