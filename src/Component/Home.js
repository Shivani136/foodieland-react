import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../Assest/Home.css'
import { AllCategory, Subscribe, GetAllRecipe, GetRecipe, SiteOptions } from '../Config/Commonapi';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from './Slider'
// import Slideshow from '../Component/Slider';

function Home() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [option, setOption] = useState([]);
  const [email, setEmail] = useState("");
  const [_id, _setId] = useState(null);


  useEffect(() => {
    fetchData();
    category();
    SiteOption();
    // getoneRecepi();
  }, []);


  async function fetchData() {

    await axios.get('/v1/getallrecipes')
      .then((response) => { setList(response.data) })
    //.then((response) => { console.log(response.data) });

  }

  async function category() {

    await axios.get('/getAllCategory')
      .then((response) => { setData(response.data) })
    //.then((response) => { console.log(response.data,"category") });

  }

  async function SiteOption() {

    await axios.get('getAllSitOptions')
      .then((response) => { setOption(response.data) })
    //.then((response) => { console.log(response.data) });

  }

  function subscrib(e) {
    e.preventDefault();

    const data = {
      email: email,
    }
    axios.post('/subscribe', data).then(
      res => {

        console.log(res)
      }).catch(
        err => {
          // console.log(err)
        }
      )


  }

  //console.log(list, "AllCategory");
  const temp = data.slice(0, 6)
  //console.log("============", temp)

  return (
    <div>


      {/* navigation */}



      {
        option.slice(0, 1).map(item => {
          console.log(item, "item")
          return (
            <div>
              <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar navbar-light bg-light border-bottom  fixed-top ">
                  <div class="container-fluid">
                    {/* <p>{item.title}</p> */}
                    <img src={`http://95.111.202.157:8001/${item.logo}`} class="img-fluid" alt="fftgh" style={{ width: "140px", height: "30px" }} />
                    <div class="collapse navbar-collapse mx-auto ml-5  mx-3 my-3">
                      <ul class="navbar-nav mx-auto ml-5">
                        <li class="nav-item active ml-5">
                          <a class="nav-link mr-sm-4 ml-5 text-dark text-uppercase" href="/"><b>Home</b> </a>
                        </li>
                        <li class="nav-item ml-5">
                          <a class="nav-link active mr-sm-4 text-dark" href="/recepilist"><b>Recipes</b> </a>
                        </li>
                        <li class="nav-item active ml-5">
                          <a class="nav-link mr-sm-4 text-dark" href="/bloglist"> <b>Blog</b></a>
                        </li>
                        <li class="nav-item ml-5">
                          <a class="nav-link active mr-sm-4 text-dark" href="/contact"> <b>Contact</b></a>
                        </li>
                        <li class="nav-item ml-5">
                          <a class="nav-link active mr-sm-4 text-dark" href="/about"> <b>About Us</b></a>
                        </li>

                      </ul>
                      <div class="form-inline my-2 my-lg-0 ml-5">
                        <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a>

                        <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>

                        <a href={item.instaUrl} class="text-dark">  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></a>

                      </div>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                          {/* <li class="nav-item active"><a class="nav-link" href="#!">{user}</a></li> */}
                          <li class="nav-item font-weight-bolder text-uppercase"><a class="nav-link" href="/login">LOGIN</a></li>
                        </ul>
                      </div>
                    </div>


                  </div>
                </nav>
              </div>
              <div class="container pt-5">
                <Slider />

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <h1 class=" pb-5 pt-5  text-dark font-weight-bold float-left categoty">Categories </h1>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">

                      <div class="navbar-nav ms-auto">
                        <a href="/categorylist" type="button" class="btn btn-info btn-lg rounded-lg float-right text-dark font-weight-bold " style={{ borderRadius: "56px", backgroundColor: "lightblue" }}>VIEW All Categories</a>
                      </div>
                    </div>
                  </div>
                </nav>


              </div>

              {/* category section */}
              <div class="">
                {
                  temp.slice(0, 5).map(item => {
                    // console.log("category data", temp)
                    return (
                      <div style={{ display: "inline-flex" }} className='varru'>


                        <div className='sa'>

                          <img src={`http://95.111.202.157:8001/${item.image}`} clas="float-left img-fluid" alt="fftgh" style={{ width: "250px", height: "250px", padding: "10px" }} />
                          <h4 class=" font-weight-bold text-dark pt-2 pb-3">{item.categoryName} </h4>
                        </div>

                      </div>
                    )
                  })
                }



              </div>
            </div>
          )
        })
      }







      {/* simple and tasty recepi */}
      <div class="container pt-5 pb-2">
        <h1 class="pt-5 pb-3 text-dark font-weight-bold"> Simple and Tasty Recepi </h1>
        <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Maxime mollitia,
          molestiae quas vel sint voluptatum laborum
        </p>
      </div>

      <div class="container-fluid pt-5 pb-3">
        <div class="row">
          {
            list.slice(0, 3).map(item => {
              // console.log("list data", list)
              return (
                <div className='col-md-4'>


                  <div className='sa pb-5'>

                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "430px", height: "300px", borderRadius: "26px" }} />
                    <h6 class=" pt-4 pb-2">{item.recipeId.title}</h6>
                    <div className='float-left pb-4'>
                      <p class="text-muted ml-4 ">{item.recipeId.cookTime}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </p>
                    </div>
                    <div className='float-right'>
                      <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg>
                      </p>

                    </div>
                  </div>

                </div>
              )
            })
          }



        </div>

        <div class="row">
          {
            list.slice(0, 2).map(item => {
              /// console.log("list data", list)
              return (
                <div className='col-md-4 pt-2'>


                  <div className='sa pb-5'>

                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "430px", height: "300px", borderRadius: "26px" }} />
                    <h6 class=" pt-4 pb-2">{item.recipeId.title}</h6>
                    <div className='float-left pb-4'>
                      <p class="text-muted ml-4">{item.recipeId.cookTime}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </p>
                    </div>
                    <div className='float-right'>
                      <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg>
                      </p>

                    </div>
                  </div>


                </div>

              )
            })
          }

          <div class="col float-right">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="des" style={{ width: "400px", height: "400px" }} class=" img-fluid pb-3" />
          </div>

        </div>




        <div class="row pb-5">
          {
            list.slice(0, 3).map(item => {
              // console.log("list data", list)
              return (
                <div className='col-md-4 pt-2'>

                  <div className='sa pb-5'>

                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "430px", height: "300px", borderRadius: "26px" }} />
                    <h6 class="  pt-4 pb-2">{item.recipeId.title}</h6>
                    <div className='float-left'>
                      <p class="text-muted ml-4">{item.recipeId.cookTime}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </p>
                    </div>
                    <div className='float-right'>
                      <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg>
                      </p>

                    </div>
                  </div>

                </div>
              )
            })
          }



        </div>

      </div>

      {/* static image */}
      <div class="container-fluid pt-5 pb-5">
        <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" class="img-fluid" alt="dec" style={{ width: "1300px", height: "600px", borderRadius: "36px" }} />
      </div>
      {/* instagram section */}
      <div class="container pt-5 pb-5">
        <h1 class="pt-5 pb-3 text-dark font-weight-bold "> CheckOut @foodienland on INSTAGRAM </h1>
        <p class="text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Maxime mollitia,
          molestiae quas vel sint voluptatum laborum
        </p>
      </div>

      <div class="container-fluid pt-5 pb-5 ">

        {
          option.slice(0, 1).map(item => {
            console.log(item, "item")
            return (
              <div>
                <div class="row pb-5">
                  <div class="col-md-3 pb-3">

                    <div class="">
                      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="des" style={{ width: '300px', height: '300px' }} class=" img-fluid " />
                      <h6 class=" pt-2">Lorem ipsum </h6>
                    </div>



                  </div>
                  <div class="col-md-3 ">
                    <div class="">
                      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="des" style={{ width: '300px', height: '300px' }} class=" img-fluid" />
                      <h6 class=" pt-2">Lorem ipsum </h6>
                    </div>
                  </div>
                  <div class="col-md-3 ">
                    <div class="">
                      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="des" style={{ width: '300px', height: '300px' }} class=" img-fluid " />
                      <h6 class=" pt-2">Lorem ipsum </h6>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="">
                      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="des" style={{ width: '300px', height: '300px' }} class=" img-fluid" />
                      <h6 class=" pt-2">Lorem ipsum </h6>
                    </div>
                  </div>


                </div>

                <a href={item.instaUrl} type="button" class="btn btn-dark btn-lg rounded-lg text-centered mr-3 "> Visit Our Instagram
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2 ml-4 rounded-lg" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>

                </a>
              </div>
            )
          })
        }


      </div>

      {/* delicious recepi */}


      <div class="container-fluid pt-5 pb-5">
        <div class="row">
          <div class="col-md-6">
            <h1 class="pt-5 pb-5 float-left "> Try this delicious recepis <br />to make your day </h1>
          </div>
          <div class="col-md-6">
            <p class="text-muted pb-5 float-right pt-5 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Maxime mollitia,
              molestiae quas vel sint voluptatum laborum
            </p>
          </div>

        </div>
      </div>


      <div class="container-fluid pt-3 pb-3">
        <div class="row ">
          {
            list.slice(0, 4).map(item => {
              // console.log("list data", list)
              return (
                <div className='col-md-3 pb-2'>


                  <div className='sa pb-5'>

                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "300px", height: "300px", borderRadius: "36px" }} />
                    <h6 class=" pt-4 pb-2">{item.recipeId.title}</h6>
                    <div className='float-left pb-4'>
                      <p class="text-muted ml-4">{item.recipeId.cookTime}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </p>
                    </div>
                    <div className='float-right'>
                      <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg>
                      </p>

                    </div>
                  </div>

                </div>
              )
            })
          }



        </div>


        <div class="row">
          {
            list.slice(0, 4).map(item => {
              // console.log("list data", list)
              return (
                <div className='col-md-3 pt-2'>


                  <div className='sa pb-5'>

                    <img src={`http://95.111.202.157:8001/${item.recipeId.image}`} class="img-fluid" alt="fftgh" style={{ width: "300px", height: "300px", borderRadius: "36px" }} />
                    <h6 class=" pt-4 pb-2">{item.recipeId.title}</h6>
                    <div className='float-left '>
                      <p class="text-muted ml-4">{item.recipeId.cookTime}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-alarm-fill float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </p>
                    </div>
                    <div className='float-right'>
                      <p class="text-muted mr-4">{item.recipeId.categoryId.categoryName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-apple float-left mr-2 text-dark" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg>
                      </p>

                    </div>
                  </div>

                </div>
              )
            })
          }



        </div>

      </div>

      {/* subscription text */}
      <div className='pt-5'>
        <div className='container-fluid pt-5 pb-5'>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMmMUwsaaDSDhZOSOq7H6jG9NHXsX6txVBA&usqp=CAU" class=" img-fluid" alt="description" style={{ width: "1200px", height: "500px", position: "relative", borderRadius: "36px" }} />

          <div className='centere '>
            <h1 className=''>Deliciousness to your inbox</h1>
            <p className='text-muted pt-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum iusto</p>

            <form onSubmit={subscrib} class="search">

              <input type="email" class="form-control searchBar" style={{ borderRadius: "20px" }} placeholder='your email address'
                value={email} onChange={(e) => { setEmail(e.target.value) }} required autofocus />
              <button class=" centeredd btn-dark  pb-2">subscribe</button>

            </form>
          </div>
        </div>
      </div>


      {/* footer */}
      <div class="navbar navbar-expand-lg navbar navbar-light bg-light pt-5 pb-5 border-bottom">
        <div class="container-fluid pb-4">
          <div class="float-left ">
            {
              option.slice(0, 1).map(item => {
                console.log(item, "item")
                return (
                  <div>
                    {/* <p>{item.title}</p> */}
                    <img src={`http://95.111.202.157:8001/${item.logo}`} class="img-fluid" alt="fftgh" style={{ width: "120px", height: "30px" }} />
                  </div>
                )
              })
            }
            {/* <h4 class=" font-italic text-dark pt-3  ">Foodien Land </h4> */}
            <h6 class="float-left text-muted pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>



          </div>

          <div class="mx-auto">
            <ul class="navbar-nav mr-auto ">

              <li class="nav-item active ">
                <a class="nav-link mr-sm-4 text-dark text-uppercase" href="/"><b>Home</b></a>
              </li>
              <li class="nav-item ">
                <a class="nav-link  mr-sm-4 text-dark" href="/recepilist"><b>Recipes</b> </a>

              </li>
              <li class="nav-item active ">
                <a class="nav-link mr-sm-4 text-dark" href="/bloglist"> <b>Blog</b></a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active mr-sm-4 text-dark" href="/contact"> <b>Contact</b></a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active mr-sm-4 text-dark" href="/about"> <b>About Us</b></a>
              </li>

            </ul>

          </div>


        </div>

      </div>

      <div class=" navbar-expand-lg navbar navbar-light bg-light pb-5  pt-5">
        <div class="container-fluid pt-1">
          <div class="mx-auto bg-light text-muted">
            <h5> @2020 Flowbase.Powered by <span className='text-danger'>Webflow</span> </h5>


          </div>

          <div class="mx-auto">
            {
              option.slice(0, 1).map(item => {
                console.log(item, "item")
                return (
                  <div>
                    <div class="form-inline my-2 my-lg-0">
                      <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook  mr-sm-4" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg></a>

                      <a href={item.instaUrl} class="text-dark"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mr-sm-4" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg></a>

                      <a href={item.instaUrl} class="text-dark">  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram  my-2 my-sm-2" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg></a>


                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>


    </div>


  )
}

export default Home;